import WhatsAppIcon from '@/assets/whatsappicon.svg'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5575991181035"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-8 z-50 animate-bounce rounded-full bg-[#25d366] p-2 drop-shadow-md transition-all hover:bg-green-500 md:bottom-2 md:p-3"
      role="button"
    >
      <img
        src={WhatsAppIcon}
        alt="Whatsapp ICON"
        className="h-8 w-8 md:h-10 md:w-10"
        loading="lazy"
      />
    </a>
  )
}

export default WhatsAppButton
