import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6" style={{ background: "#080808" }}>
      <div
        className="gold-text-gradient block mb-4"
        style={{ fontFamily: "'Kugile', sans-serif", fontSize: "8rem", fontWeight: 300, lineHeight: 1 }}
      >
        404
      </div>
      <h2 className="mb-4" style={{ fontFamily: "'Kugile', sans-serif", fontSize: "2rem", fontWeight: 400, color: "#f8f6f0" }}>
        Page not found
      </h2>
      <p className="mb-8" style={{ fontFamily: "'Kugile', sans-serif", color: "rgba(248,246,240,0.45)", fontWeight: 300 }}>
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="px-8 py-4 text-sm tracking-[0.12em] uppercase font-medium" style={{ fontFamily: "'Kugile', sans-serif", background: "var(--gold)", color: "#080808" }}>
        Go Home
      </a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "work", Component: WorkPage },
      { path: "about", Component: AboutPage },
      { path: "pricing", Component: PricingPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
