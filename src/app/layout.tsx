import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damy Matuwidi",
  description: "Damy Matuwidi is a penultimate year Computer Science student who is an aspiring Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
