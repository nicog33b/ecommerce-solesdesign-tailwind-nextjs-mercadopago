'use client';
// components/Success.js
import React, { useEffect, useState } from "react";
import { createCompra } from "../services/registro";
import { getPrendaById, updatePrenda, deletePrenda } from "../services/prendas";

const Success = () => {
  const [showContent, setShowContent] = useState(false);

  const RedirectToWhatsApp = () => {
    const phoneNumber = "+59899321197";
    const message = "Hola Sole, ¿cómo estás?";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappLink;
  };

  const handlePurchaseSuccess = async () => {
  try {
    const userCart = JSON.parse(localStorage.getItem("userCart"));

    if (userCart && userCart.length > 0) {
      const total = userCart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
      const items = userCart.map((item) => ({
        prendaId: item._id,
        cantidad: item.cantidad,
      }));

      const nuevaCompra = {
        items,
        total,
        fecha: new Date(),
      };

      const createdCompra = await createCompra(nuevaCompra);

      // ELIMINAR PRENDA SEGUN STOCK.

      for (const item of userCart) {
        const prendaId = item._id;
        const prenda = await getPrendaById(prendaId);

        if (prenda) {
          const newEliminateIn = prenda.eliminateIn || 1;

          if (newEliminateIn <= 1) {
                  // Eliminar el carrito después de completar todas las operaciones
      localStorage.removeItem("userCart");
            // Si eliminateIn es 1 o menos, eliminar la prenda
            await deletePrenda(prendaId);
          } else if (prenda.eliminateIn !== undefined) {
                  // Eliminar el carrito después de completar todas las operaciones
      localStorage.removeItem("userCart");
            // Si eliminateIn es mayor que 1 y tiene un valor definido, restar 1 y actualizar la prenda
            const updatedPrenda = { ...prenda, eliminateIn: newEliminateIn - 1 };
            await updatePrenda(prendaId, updatedPrenda);
          }
        }
      }


    }
  } catch (error) {
    console.error('Error al completar la compra:', error.message);
  }
};


  useEffect(() => {
    const btoken = localStorage.getItem("btoken");

    if (!btoken) {
      window.location.href = "/";
    } else {
      setShowContent(true);

      // Move the purchase logic into a separate function
      const processPurchase = async () => {
        // Wrap the entire logic in a try-catch block
        try {
          await handlePurchaseSuccess();
        } catch (error) {
          console.error('Error al completar la compra:', error.message);
        }
      };

      // Call the function
      processPurchase();
    }
  }, []);

  return (
    <div>
      {showContent && (
        <div className="mt-6 mb-6 text-center bg-green-200 p-4 rounded-lg">
          <p className="font-serif text-2xl text-black text-center">
            ¡Compra finalizada correctamente!
          </p>
          <p className="text-gray-600 mt-2 text-center">
            ¡Gracias por tu compra!
          </p>
          <p className="text-gray-600 mt-2 text-center">
            ¡Comunícate con Sole al WhatsApp para reclamar tus prendas!
          </p>
          <button
            onClick={RedirectToWhatsApp}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Contacto por WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
