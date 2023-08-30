'use client';

import React from 'react';

import { Mail, MapPin, Smartphone } from 'lucide-react';
import { Props, ContactItemProps } from '@/types';
import { Reveal } from 'react-awesome-reveal';

const ContactItem = ({ icon, title, link, text }: ContactItemProps) => (
  <div className="flex flex-col container w-2/3 gap-3 items-center justify-center">
    {icon}
    <h2 className="uppercase text-lg font-bold text-gray-400">{title}</h2>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-orange-500 cursor-pointer"
    >
      <p className="text-sm text-center">{text}</p>
    </a>
  </div>
);

export const Contact: React.FC<Props> = ({ id }) => {
  const contactItems = [
    {
      icon: <MapPin className="text-orange-500 mb-4" size={32} />,
      title: 'Endereço',
      link: 'https://goo.gl/maps/Yd5GnGXN2TPZnVMF6',
      text: 'R. Barra Avenida, 870, Mangabeira Feira de Santana, Bahia',
    },
    {
      icon: <Smartphone className="text-orange-500 mb-4" size={32} />,
      title: 'Telefone',
      link: 'https://api.whatsapp.com/send?phone=5575991181035&text=Ol%C3%A1%2C%20vim%20do%20seu%20site.',
      text: '(75) 9 9118-1035',
    },
    {
      icon: <Mail className="text-orange-500 mb-4" size={32} />,
      title: 'Email',
      link: 'mailto:contato.tapetesetal@gmail.com',
      text: 'contato.tapetesetal@gmail.com',
    },
  ];

  return (
    <div id={id} className="bg-slate-50 py-[40px] lg:py-[104px]">
      <Reveal cascade triggerOnce>
        <div className="container flex flex-col justify-center items-center gap-10">
          <h1 className="title">Contato</h1>
          <div className="flex flex-col lg:flex-row gap-9 justify-center items-start mt-4">
            {contactItems.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
