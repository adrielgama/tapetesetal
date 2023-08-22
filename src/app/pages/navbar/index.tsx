import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';
import { Modal } from '../modal';

import Logo from '@/images/logo.svg';

export const Navbar = () => {
  return (
    <div
      className="shadow-lg drop-shadow-lg w-full fixed top-0 left-0 z-50 bg-white"
      x-data="appData()"
      x-init="appInit()"
    >
      <nav className="flex flex-row items-center justify-between lg:container py-1 md:px-10 px-7 gap-2">
        <div className="flex items-center">
          <a className="cursor-pointer" href="#">
            <Image
              className="object-cover max-h-[80px] max-w-[240px] sm:h-[104px] sm:w-[340px] md:h-[104px] md:w-[340px] lg:h-[104px] lg:w-[340px]"
              src={Logo}
              alt="Tapetes e Tal - Logo"
              loading="lazy"
            />
          </a>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <a href="#about" className="header-links">
            Sobre nós
          </a>
          <a href="#clients" className="header-links">
            Clientes
          </a>
          <a href="#product" className="header-links">
            Produto
          </a>
          <a href="#contact" className="header-links">
            Contato
          </a>
        </div>

        <div className="flex items-center space-x-5">
          <DialogTrigger asChild>
            <Button
              className="bg-orange-400 hover:bg-orange-600 text-white uppercase text-xs sm:text-sm w-auto sm:w-24 md:w-32 lg:w-40"
              variant="default"
              aria-controls="open-modal"
              id="open-modal-button"
            >
              Simule aqui
            </Button>
          </DialogTrigger>
        </div>
        <Modal />
      </nav>
    </div>
  );
};
