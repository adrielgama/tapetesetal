import CarpetShowcase from '@/assets/images/carpet.webp'

export const Showcase = () => {
  return (
    <section className="container grid grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 lg:py-8">
      <div className="grid gap-8">
        <h1 className="text-5xl font-bold text-tet-orange-900 md:text-7xl">
          Um novo conceito em{' '}
          <span className="text-tet-orange-300">Tapetes</span>
        </h1>
        <p className="text-sm text-gray-400">
          Conheça mais sobre a Tapetes & Tal
        </p>
        <a
          href="#about-us"
          className="text-sm text-tet-orange-900/80 hover:text-tet-orange-900 hover:underline"
        >
          Saiba mais
        </a>
      </div>
      {/* TODO - FAZER UM CAROUSEL DE IMAGENS */}
      <img
        src={CarpetShowcase}
        alt="Vinyl loop mat"
        loading="lazy"
        className="hidden max-h-96 w-full justify-center object-contain md:block"
      />
    </section>
  )
}
