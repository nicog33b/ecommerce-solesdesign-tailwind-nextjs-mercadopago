
import './globals.css'

import MessageTop from './UI/messageTop'
import MessageTopM from './UI/mobile/messageTopM'
import Navbar from './UI/Navbar'
import NavbarM from './UI/mobile/navbarM'
import Footer from './UI/Footer'


export const metadata = {
  title: 'Solesdesign | Diseño con identidad única ',
  description: 'Piezas únicas, conexión y esencia. Descubre nuestra colección exclusiva de moda uruguaya. Blazers, Conjuntos, Camisa, Pantalon, Lino, Algodón, prendas 100% hechas a mano. ',
  keywords: 'prendas hechas a mano, ropa hecha a mano, ropa de diseño, diseñadora de moda, ropa uruguay, ropa a medida, coleccion de diseño, piezas unicas de diseño, camisa, blazers, conjuntos, camisas, pantalon ,lino, exclusivo',
  author: '094272390 - Crea tu pagina web con nosotros. ',
  image: '',
  url: 'https://www.solesdesign.store',
  type: 'website',
  locale: 'es_UY', // Código de idioma y país (ejemplo: es_UY para español de Uruguay)
  siteName: 'Solesdesign',
  facebookAppId: 'https://www.facebook.com/Tiendasoles.uy',
  robots: 'index, follow', // Directivas de robots (indexar y seguir)
  og: {
    title: 'Solesdesign| Diseño con identidad única ',
    description: 'Piezas únicas, conexión y esencia. Descubre nuestra colección exclusiva de moda uruguaya. Blazers, Conjuntos, Camisa, Pantalon, Lino, Algodón, prendas 100% hechas a mano. ',
    type: 'website',
    url: 'https://www.solesdesign.store',
    siteName: 'Solesdesign',
    image: '',
    locale: 'es_UY', // Código de idioma y país (ejemplo: es_UY para español de Uruguay)
  },
};


export default function RootLayout({ children }) {



  return (
    <html >
      
      <body className='bg-black'>
        <MessageTopM></MessageTopM>
    
     <Navbar></Navbar>
      
        {children}
        <Footer/>
        </body>


    </html>
  )
};
