'use client';
import React from 'react';
import { Mail, MapPin, Smartphone } from 'lucide-react';
import { Props } from '@/types/types';

import { Reveal } from 'react-awesome-reveal';

export const Contact: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="bg-slate-50 py-[40px] lg:py-[104px]">
      <Reveal cascade triggerOnce>
        <div className="container flex flex-col justify-center items-center gap-10">
          <h1 className="title">Contato</h1>
          <div className="flex flex-col lg:flex-row gap-9 justify-center items-start mt-4">
            <div className="flex flex-col container lg:w-2/3 gap-3 items-center justify-center">
              <MapPin className="text-orange-500 mb-4" size={32} />
              <h2 className="uppercase text-lg font-bold text-gray-400">
                Endereço
              </h2>
              <a
                href="https://goo.gl/maps/Yd5GnGXN2TPZnVMF6"
                target="_blank"
                className="hover:text-orange-500 cursor-pointer"
              >
                <p className="text-sm text-center">
                  R. Barra Avenida, 870, Mangabeira Feira de Santana, Bahia
                </p>
              </a>
            </div>
            <div className="flex flex-col container w-2/3 gap-3 items-center justify-center">
              <Smartphone className="text-orange-500 mb-4" size={32} />
              <h2 className="uppercase text-lg font-bold text-gray-400">
                Telefone
              </h2>
              <a
                href="https://api.whatsapp.com/send?phone=5575991181035&text=Ol%C3%A1%2C%20vim%20do%20seu%20site."
                target="_blank"
                className="hover:text-orange-500 cursor-pointer"
              >
                <p className="text-sm text-center">(75) 9 9118-1035</p>
              </a>
            </div>
            <div className="flex flex-col container w-2/3 gap-3 items-center justify-center">
              <Mail className="text-orange-500 mb-4" size={32} />
              <h2 className="uppercase text-lg font-bold text-gray-400">
                Email
              </h2>
              <a
                href="malito:contato.tapetesetal@gmail.com"
                target="_blank"
                className="hover:text-orange-500 cursor-pointer"
              >
                <p className="text-sm text-center">
                  contato.tapetesetal@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
