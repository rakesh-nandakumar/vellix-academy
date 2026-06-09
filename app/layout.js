import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Vellix Academy – Enterprise IT & Software Development Courses",
  description:
    "Vellix Academy is Sri Lanka's premier enterprise IT education provider. Master software development, data science, cloud computing, and more with industry experts.",
  keywords:
    "IT courses Sri Lanka, software development, data science, cloud computing, full stack web development, enterprise programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          href="/images/logos/favicon.jpg"
          type="image/jpeg"
        />
      </head>
      <body style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
