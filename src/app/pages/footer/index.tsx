import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-orange-500 text-orange-50 text-xs py-4">
      <div className="flex flex-col justify-center items-center gap-3 container">
        <p>
          Copyright NINA SOPHIA LOPES GAMA SANTOS 08239225535 -
          43.627.021/0001-44 – 2023. Todos os direitos reservados.
        </p>
        <div className="flex flex-1 gap-1">
          <p>Development by</p>
          <a
            className="cursor-pointer text-gray-900 hover:text-orange-100"
            href="https://adrielgama.dev/"
            target="_blank"
          >
            adrielgama.dev
          </a>
        </div>
      </div>
    </div>
  );
};
