import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "healthy", message: "API is up and running!" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, type, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Please provide name, email, and message." });
  }

  try {
    // Configure Nodemailer transporter (Configure credentials in your .env file)
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New AI Video Production Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Project Type: ${type || "Not Specified"}
        Estimated Budget: ${budget || "Not Specified"}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New AI Video Production Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${type || "Not Specified"}</p>
        <p><strong>Estimated Budget:</strong> ${budget || "Not Specified"}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    // In production, we'll return success: false, but to let the form work even without configured emails:
    return res.status(500).json({ success: false, error: "Failed to send email. Check your SMTP configuration." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running securely on port ${PORT}`);
});
