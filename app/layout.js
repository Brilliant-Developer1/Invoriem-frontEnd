import { Poppins } from 'next/font/google';
import './globals.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

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
      </body>
    </html>
  );
}
