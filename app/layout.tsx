import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Damy Matuwidi',
  description:
    'Damy Matuwidi is a penultimate year Computer Science student who is an aspiring Software Engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/background.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/background-small.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className={`${inter} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
