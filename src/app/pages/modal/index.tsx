'use client';
import React, { useState } from 'react';
import { DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { formatCurrency } from './utils/currency';
import { FormSection } from './form';
import { Result } from './result';

export const Modal = () => {
  const [actualPage, setActualPage] = useState(1);
  const [result, setResult] = useState(0);

  return (
    <DialogContent
      className="bg-white"
      id="open-modal"
      aria-labelledby="open-modal-button"
      onCloseAutoFocus={() => setActualPage(1)}
    >
      {actualPage === 1 ? (
        <FormSection setWizard={setActualPage} setResult={setResult} />
      ) : (
        <div className="flex flex-col justify-center items-center gap-4">
          <Result result={result} />

          <a
            href={`https://api.whatsapp.com/send?phone=5575991181035&text=Ol%C3%A1%2C%20vim%20do%20seu%20site.%20O%20valor%20do%20meu%20or%C3%A7amento%20deu%3A%20%20${formatCurrency(
              result,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="default"
              className="bg-green-600 hover:bg-green-700 text-white w-full uppercase rounded-[4px]"
            >
              <FaWhatsapp className="mr-2 h-5 w-5" /> Entrar em contato
            </Button>
          </a>
        </div>
      )}
    </DialogContent>
  );
};
