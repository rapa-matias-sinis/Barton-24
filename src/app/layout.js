import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Navbar from "./_components/Navbar"
import Footer from './_components/Footer';
import WhatappButton from './_components/WhatappButtom';


export const metadata = {
  title: "Barton",
  description: "Barton tu proxima contruccion",
};


export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className='w-100 h-100'>
          <Navbar />  
          {children}
          <WhatappButton />
          <Footer /> 
        </body>
      </html>
  );
}
