import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { Props } from '@/types';

import BB from '@/images/bb.png';
import Incardio from '@/images/incardio.png';
import Kairos from '@/images/kairos.png';
import LMarquezzo from '@/images/lmarquezzo.png';
import Mendel from '@/images/mendel.png';
import Sicoob from '@/images/sicoob.png';
import SmartFit from '@/images/smartfit.png';
import Subway from '@/images/subway.png';
import Tabajara from '@/images/tabajara.png';
import Unimed from '@/images/unimed.png';

export const Clients: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="flex flex-col gap-10 py-[110px]">
      <h1 className="text-center title">Nossos clientes</h1>

      <Marquee gradient pauseOnClick>
        <Image className="mx-4" src={BB} alt="Banco do Brasil" loading="lazy" />
        <Image className="mx-4" src={Incardio} alt="Incardio" loading="lazy" />
        <Image className="mx-4" src={Kairos} alt="Kairos" loading="lazy" />
        <Image
          className="mx-4"
          src={LMarquezzo}
          alt="LMarquezzo"
          loading="lazy"
        />
        <Image className="mx-4" src={Mendel} alt="Mendel" loading="lazy" />
        <Image className="mx-4" src={Sicoob} alt="Sicoob" loading="lazy" />
        <Image className="mx-4" src={SmartFit} alt="SmartFit" loading="lazy" />
        <Image className="mx-4" src={Subway} alt="Subway" loading="lazy" />
        <Image className="mx-4" src={Tabajara} alt="Tabajara" loading="lazy" />
        <Image className="mx-4" src={Unimed} alt="Unimed" loading="lazy" />
      </Marquee>
    </div>
  );
};
