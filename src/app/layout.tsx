import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const porr = localFont({
  src: '../../public/font/whizbang-roman.ttf',
});

export const metadata: Metadata = {
  title: 'Para Matar a Curiosidade',
  description: 'Uma comic',
  icons: [
    {
      url: '/favicon.ico',
    },
  ],
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang='en'>
    <body className={`${porr.className} antialiased`}>
      <main className='h-full'>{children}</main>
    </body>
  </html>
);

export default RootLayout;
