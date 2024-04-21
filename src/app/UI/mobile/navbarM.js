'use client';
// components/UI/mobile/navbarM.js
import React, { useState } from "react";
import NavigationM from "./navigationM";
import Logo from "../logo";
import { ImList } from "react-icons/im";

const NavbarM = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2 z-10">
      <div className="bg-white flex items-start p-1 w-[3/12] mt-3 mb-3 transition duration-300">
        <ImList
          className="text-black cursor-pointer"
          onClick={openModal}
        />
      </div>

      {/* LOGO IMAGE component */}
      <Logo />

      {/* Modal NavigationM */}
      {modalOpen && <NavigationM closeModal={closeModal} />}
    </header>
  );
};

export default NavbarM;
