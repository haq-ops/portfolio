import { Poppins } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Faslulhaq Farees | Full-Stack Developer",
  description:
    "Faslulhaq Farees, IT undergraduate at SLIIT building full-stack web apps with React, Node.js, Spring Boot and Docker. Open to software engineering internships.",
  openGraph: {
    title: "Faslulhaq Farees | Full-Stack Developer",
    description: "Full-stack web apps, microservices and CI/CD. IT undergraduate at SLIIT.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-bg text-ink font-sans antialiased overflow-x-hidden">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
