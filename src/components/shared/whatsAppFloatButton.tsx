import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5575991181035"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 right-4 p-2 md:p-3 bg-[#25d366] rounded-full hover:bg-green-500 drop-shadow-md z-50 transition-all animate-bounce"
    >
      <img src="/images/whatsappicon.svg" alt="Whatsapp ICON" className='w-8 h-8 md:w-10 md:h-10' />
    </a>
  );
};

export default WhatsAppButton;
