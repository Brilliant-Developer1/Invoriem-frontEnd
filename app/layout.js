import { Poppins } from 'next/font/google';
import './globals.css';
import { NavBar } from './home/NavBar/NavBar';
import { Footer } from './home/Footer/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'normal', 'normal'],
  display: 'swap', 
});

export const metadata = {
  title: 'Invoriem',
  description:
    'Crafting Dreams, Building Futures: Your Premier Property Partner',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
