import type {Metadata} from 'next';
import {DM_Sans, Oswald} from 'next/font/google';
import './globals.css'; // Global styles

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Creative Agency Banner',
  description: 'Design that captivates today and inspires tomorrow.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${oswald.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-white bg-black min-h-screen selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}

