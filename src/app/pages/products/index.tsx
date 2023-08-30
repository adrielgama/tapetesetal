'use client';
import React from 'react';
import Image from 'next/image';

import { Props } from '@/types/types';
import { Zoom, Slide } from 'react-awesome-reveal';

import TapetesBanner from '@/images/products/tapetes.webp';
import CarpetVinyl from '@/images/products/carpet-pvc.webp';
import CarpetVulcan from '@/images/products/carpet-vulcanizado.webp';
import { Separator } from '@/components/ui/separator';

export const Products: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="bg-orange-50">
      <Image
        className="object-cover -scale-x-100 w-screen"
        src={TapetesBanner}
        alt="banner com várias marcas e tapetes"
        loading="lazy"
      />
      <Zoom cascade direction="up" triggerOnce>
        <div className="container pt-[40px] lg:pt-[104px]">
          <h1 className="text-center title">Nosso produto</h1>
          <Slide cascade direction="left" triggerOnce>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:container md:mt-6 py-6">
              <div className="flex flex-col lg:w-2/4 gap-4 container">
                <h2 className="text-center subtitle">Carpete Vulcanizado</h2>
                <h3 className="text-center text-lg font-semibold text-orange-300">
                  100% PVC
                </h3>
                <p className="text-gray-500 text-justify">
                  Nosso capacho vínilico é indicado para quem busca um produto
                  com alta durabilidade e baixo custo de manunteção. Locais com
                  tráfego de pessoas, suas propriedades antiderrapante e a
                  retenção de sujeira, tornam seu uso ideal e seguro em
                  condomínios. portarias, casas, clínicas, escolas, lavabos,
                  banheiros, elevadores etc
                </p>
              </div>
              <Image
                src={CarpetVinyl}
                alt="carpete azul em capacho vinílico"
                className="md:w-[50%] lg:w-[40%] p-6"
                loading="lazy"
              />
            </div>
          </Slide>

          <div className="container lg:w-1/2">
            <Separator className="my-4 bg-orange-100 " />
          </div>

          <Slide cascade direction="right" triggerOnce>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:container py-6">
              <Image
                src={CarpetVulcan}
                alt="carpete azul em capacho vinílico"
                className="md:w-[50%] lg:w-[40%] p-6"
                loading="lazy"
              />
              <div className="flex flex-col lg:w-2/4 gap-4 container">
                <h2 className="text-center subtitle">Vantagens</h2>
                <div className="flex flex-col md:flex-row md:gap-6 mt-5">
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-500 text-justify">
                      ✓ Antiderrapante
                    </p>
                    <p className="text-gray-500 text-justify">✓ Antichamas</p>
                    <p className="text-gray-500 text-justify">
                      ✓ Produtos de primeira linha
                    </p>
                    <p className="text-gray-500 text-justify">
                      ✓ Retenção de até 70% da sujeira
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-500 text-justify">
                      ✓ Resistência ao sol e à chuva
                    </p>
                    <p className="text-gray-500 text-justify">
                      ✓ Facilidade na manutenção
                    </p>
                    <p className="text-gray-500 text-justify">
                      ✓ Garantia contra defeitos de fábrica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </Zoom>
    </div>
  );
};
