import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Vellix Academy – Enterprise IT & Software Development Courses",
  description:
    "Vellix Academy is Sri Lanka's premier enterprise IT education provider. Master software development, data science, cloud computing, and more with industry experts.",
  keywords:
    "IT courses Sri Lanka, software development, data science, cloud computing, full stack web development, enterprise programming",
  icons: {
    icon: "/images/logos/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white font-sans text-slate-600 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
