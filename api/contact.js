const nodemailer = require("nodemailer");

// Simple HTML sanitizer to prevent XSS in email body
function sanitize(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Set CORS headers for all responses
function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only accept POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { name, email, type, budget, message } = req.body || {};

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Please provide name, email, and message.",
    });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: "Please provide a valid email address.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Sanitize all user inputs before embedding in HTML
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeType = sanitize(type || "Not Specified");
    const safeBudget = sanitize(budget || "Not Specified");
    const safeMessage = sanitize(message);

    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Inquiry from ${safeName} — ${safeType}`,
      text: [
        `New AI Video Production Inquiry`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${type || "Not Specified"}`,
        `Estimated Budget: ${budget || "Not Specified"}`,
        ``,
        `Message:`,
        `${message}`,
      ].join("\n"),
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border: 1px solid #222; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); padding: 32px 28px; border-bottom: 1px solid rgba(201,168,76,0.25);">
            <h2 style="margin: 0; font-size: 22px; font-weight: 500; color: #c9a84c;">New Project Inquiry</h2>
            <p style="margin: 6px 0 0; font-size: 13px; color: rgba(248,246,240,0.45);">Received from your website contact form</p>
          </div>
          <div style="padding: 28px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: rgba(248,246,240,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 130px; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #f8f6f0; font-size: 15px;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: rgba(248,246,240,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #f8f6f0; font-size: 15px;"><a href="mailto:${safeEmail}" style="color: #c9a84c; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: rgba(248,246,240,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Project Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #f8f6f0; font-size: 15px;">${safeType}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: rgba(248,246,240,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Budget</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #f8f6f0; font-size: 15px;">${safeBudget}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.15); border-radius: 8px;">
              <p style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(248,246,240,0.4);">Message</p>
              <p style="margin: 0; font-size: 15px; color: #f8f6f0; line-height: 1.7; white-space: pre-wrap;">${safeMessage.replace(/\n/g, "<br/>")}</p>
            </div>
          </div>
          <div style="padding: 20px 28px; background: #070707; border-top: 1px solid #1a1a1a; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: rgba(248,246,240,0.25);">You can reply directly to this email to respond to ${safeName}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error.message);
    return res.status(500).json({
      success: false,
      error: "Failed to send email. Please try again later.",
    });
  }
};
