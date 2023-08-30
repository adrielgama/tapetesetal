'use client';

import React from 'react';
import Image from 'next/image';
import { Props } from '@/types/types';

import { Fade, Reveal, Slide } from 'react-awesome-reveal';

import HoldingCarpet from '@/images/resource/holding-carpet2.webp';

export const About: React.FC<Props> = ({ id }) => {
  return (
    <div className="bg-slate-50 pt-[40px] lg:pt-[104px]" id={id}>
      <Slide cascade triggerOnce direction="right">
        <div className="container flex md:flex-col-reverse flex-col lg:flex-row justify-center items-center">
          <Image
            className="h-[280px] md:w-[410px] lg:h-auto lg:w-[380px] xl:w-[600px] object-cover w-auto -scale-x-100"
            src={HoldingCarpet}
            alt="homem segurando um carpete enrolado no ombro"
            loading="lazy"
          />
          <Slide triggerOnce direction="right">
            <div className="text-center container flex flex-col items-center justify-center gap-10">
              <h1 className="title mt-10">Sobre nós</h1>

              <p className="text-justify text-sm md:w-2/3 mb-24">
                A Tapetes & Tal é uma empresa especializada na fabricação de
                tapetes em vinil, emborrachados e vulcanizados que vem
                oferecendo produtos de qualidade aos seus clientes desde 1992.
                Utilizando tecnologia moderna e matéria-prima de primeira linha,
                a nossa empresa garante a durabilidade em seus produtos e
                serviços. Além disso, primamos por manter uma relação de
                profissionalismo, pontualidade e respeito com os nossos
                clientes. Nossa meta é continuar ofertando produtos que integrem
                soluções inovadoras e sustentáveis de forma personalizada.
              </p>
            </div>
          </Slide>
        </div>
      </Slide>
    </div>
  );
};
