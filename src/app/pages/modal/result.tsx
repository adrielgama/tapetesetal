import React from 'react';
import Image from 'next/image';
import { formatCurrency } from './utils/currency';

import Background from '@/images/resource/bg-result.jpg';

interface ResultProps {
  result?: number;
}

export const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <div className="mt-5 flex justify-center items-center">
      <h1 className="absolute text-6xl font-bold mix-blend-difference text-orange-400">
        {formatCurrency(result)}
      </h1>
      <Image
        src={Background}
        alt="Imagem de um capacho preto com borda dourada."
        loading="lazy"
      />
    </div>
  );
};
