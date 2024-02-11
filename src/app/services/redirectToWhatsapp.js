// Página en Next.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectToWhatsApp = () => {
  const router = useRouter();

  useEffect(() => {
    // Número de teléfono al que se redireccionará en formato internacional para Uruguay
    const phoneNumber = '+59899321197';

    // Mensaje opcional
    const message = 'Hola Sole, ¿cómo estás?';

    // Construir el enlace de WhatsApp con el número y el mensaje
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redireccionar a WhatsApp
    window.location.href = whatsappLink;
  }, []);

  return <div>Redirigiendo a WhatsApp...</div>;
};

export default RedirectToWhatsApp;
