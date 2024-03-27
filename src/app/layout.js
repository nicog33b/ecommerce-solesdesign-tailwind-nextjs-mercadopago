
import './globals.css'

import MessageTop from './UI/messageTop'
import MessageTopM from './UI/mobile/messageTopM'
import Navbar from './UI/Navbar'
import NavbarM from './UI/mobile/navbarM'
import Footer from './UI/Footer'
import Head from 'next/head';


export const metadata = {
  title: 'Solesdesign | Moda Única y Hecha a Mano',
  description: 'Descubre moda uruguaya única y hecha a mano. Blazers, conjuntos y más. Conexión y esencia en cada pieza.',
  keywords: 'moda uruguaya, ropa hecha a mano, diseño exclusivo, prendas a medida, blazers, conjuntos, camisas, lino, algodón, exclusivo',
  author: 'Nicolás García, @tuweb_cuantica',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuX8cO41QDGwJuXhUNtZtqk9dCeI5Y4mwdhNMPPCBgZQ&s',
  url: 'https://www.solesdesign.store',
  type: 'website',
  locale: 'es_UY', // Código de idioma y país (ejemplo: es_UY para español de Uruguay)
  siteName: 'Solesdesign',
  robots: 'index, follow', // Directivas de robots (indexar y seguir)
  og: {
    title: 'Solesdesign | Moda Única y Hecha a Mano',
    description: 'Descubre moda uruguaya única y hecha a mano. Blazers, conjuntos y más. Conexión y esencia en cada pieza.',
    type: 'website',
    url: 'https://www.solesdesign.store',
    siteName: 'Solesdesign',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuX8cO41QDGwJuXhUNtZtqk9dCeI5Y4mwdhNMPPCBgZQ&s',
    locale: 'es_UY', // Código de idioma y país (ejemplo: es_UY para español de Uruguay)
  },
};



export default function RootLayout({ children }) {



  return (
    <html >
      <Head>
      <meta name="google-site-verification" content="gNsX7IugdRPLuJN-fOZK5mGfFFuwAYRueo6CIR8pgYU" />
      </Head>
      <body className='bg-black'>
        <MessageTopM></MessageTopM>
    
     <Navbar></Navbar>
      
        {children}
        <Footer/>
        </body>


    </html>
  )
};
