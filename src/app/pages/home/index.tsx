'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { Slide, Reveal } from 'react-awesome-reveal';

import HoldingCarpet from '@/images/resource/holding-carpet.png';

export const HomeSection = () => {
  return (
    <div className="bg-orange-50 bg-wave1 bg-no-repeat bg-cover bg-scroll lg:pt-[200px]">
      <Reveal cascade triggerOnce>
        <div className="container flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col items-center lg:items-start container text-center lg:text-left max-w-2xl mb-16">
            <Slide triggerOnce>
              <h1 className="title mt-28 md:mt-40 lg:mt-9">Bem-vindo a</h1>
            </Slide>
            <Slide triggerOnce>
              <h2 className="subtitle mt-4 text-orange-500 uppercase">
                Tapetes & Tal
              </h2>
            </Slide>
            <Slide triggerOnce>
              <p className="paragraph opacity-60">
                Um novo conceito em tapetes.
              </p>
            </Slide>
            <Slide triggerOnce>
              <a href="#about">
                <Button
                  className="mt-10 bg-gray-400 hover:bg-gray-600 text-white w-full uppercase sm:max-w-24 md:w-48 lg:max-w-40"
                  variant="default"
                >
                  Saiba mais
                </Button>
              </a>
            </Slide>
          </div>
          <Image
            className="h-[280px] md:h-[410px] object-cover w-auto -scale-x-100"
            src={HoldingCarpet}
            alt="pessoa segurando um carpet"
            loading="lazy"
          />
        </div>
      </Reveal>
    </div>
  );
};
