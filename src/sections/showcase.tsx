import CarpetShowcase from '@/assets/images/carpet.png'

export const Showcase = () => {
  return (
    <div className="">
      <div className="container grid grid-cols-2 items-center gap-8 py-8">
        <div className="grid gap-8">
          <h1 className="text-7xl font-bold text-tet-orange-900 md:text-6xl">
            Um novo conceito em{' '}
            <span className="text-tet-orange-300">Tapetes</span>
          </h1>
          <p className="text-sm text-gray-400">
            Conheça mais sobre a Tapetes & Tal
          </p>
          <a
            href="#"
            className="text-sm text-tet-orange-900/80 hover:text-tet-orange-900 hover:underline"
          >
            Saiba mais
          </a>
        </div>
        <img
          src={CarpetShowcase}
          alt="Vinyl loop mat"
          className="hidden max-h-96 w-full justify-center object-contain md:block"
        />
      </div>
    </div>
  )
}
