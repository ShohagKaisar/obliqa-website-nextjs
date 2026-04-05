import type { Metadata } from "next";
import "../index.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata: Metadata = {
  title: "Obliqa - Premium Web Development & Digital Agency",
  description: "Obliqa provides top-tier web development, digital marketing, and design solutions tailored for your business needs.",
  keywords: ["web development", "digital agency", "SEO", "marketing"],
  openGraph: {
    title: "Obliqa - Digital Agency",
    description: "Empowering your business with scalable web development and innovative digital solutions.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
