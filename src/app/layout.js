
import './globals.css'

import MessageTop from './UI/messageTop'
import MessageTopM from './UI/mobile/messageTopM'
import Navbar from './UI/Navbar'
import NavbarM from './UI/mobile/navbarM'

export const metadata = {
  title: 'SOLESDESIGN | Diseño y Confección Uruguaya',
  description: 'Piezas unicas, conexion y esencia',
}

export default function RootLayout({ children }) {
  return (
    <html>
      
      <body>
        <MessageTop></MessageTop>
    
     <Navbar></Navbar>
      
        {children}
        </body>


    </html>
  )
};
