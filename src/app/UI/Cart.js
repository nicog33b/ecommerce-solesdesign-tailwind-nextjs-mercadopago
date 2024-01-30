// components/ShoppingCart.js
import React from 'react';
import CardCart from './cart/CardCart';

const ShoppingCart = ({ onClose }) => {



    
      const handleContainerClick = (e) => {
        // Check if the clicked element is the container with id 'cartSpace'
        if (e.target.id != 'cartSpace') {
          // Clicked inside the modal content, do nothing or handle as needed
        } else {
          // Clicked outside the modal content, close the modal
          onClose();
        }
      };

      const cantidadOptions = Array.from({ length: 10 }, (_, i) => i + 1);
    

      return (
        <div className="relative z-15" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          {/* Background backdrop */}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer"></div>
    
          <div className="fixed inset-0 overflow-hidden">
            <div id='cartSpace' className="absolute inset-0 overflow-hidden" onClick={handleContainerClick}>


          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            {/* Slide-over panel */}
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                {/* Header */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button type="button" onClick={onClose} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Product list */}
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {/* Product items */}
                        
                       <CardCart></CardCart>


                        {/* More product items... */}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$262.00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <button type="button" onClick={()=>{onClose()}} className="font-medium text-indigo-600 hover:text-indigo-500">
                        Continuar comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
