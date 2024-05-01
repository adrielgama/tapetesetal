import Marquee from 'react-fast-marquee'

import BB from '@/assets/brands/bb.webp'
import Incardio from '@/assets/brands/incardio.webp'
import Kairos from '@/assets/brands/kairos.webp'
import LMarquezzo from '@/assets/brands/lmarquezzo.webp'
import Mendel from '@/assets/brands/mendel.webp'
import Sicoob from '@/assets/brands/sicoob.webp'
import SmartFit from '@/assets/brands/smartfit.webp'
import Subway from '@/assets/brands/subway.webp'
import Tabajara from '@/assets/brands/tabajara.webp'
import Unimed from '@/assets/brands/unimed.webp'

export const Clients = () => {
  const clientImages = [
    { src: BB, alt: 'Banco do Brasil' },
    { src: Incardio, alt: 'Incardio' },
    { src: Kairos, alt: 'Kairos' },
    { src: LMarquezzo, alt: 'LMarquezzo' },
    { src: Mendel, alt: 'Mendel' },
    { src: Sicoob, alt: 'Sicoob' },
    { src: SmartFit, alt: 'SmartFit' },
    { src: Subway, alt: 'Subway' },
    { src: Tabajara, alt: 'Tabajara' },
    { src: Unimed, alt: 'Unimed' },
  ]

  return (
    <div
      id="clients"
      className="container relative flex flex-col items-center justify-center py-12"
    >
      <h1 className="pb-4 text-4xl font-bold text-orange-950">
        Nossos clientes
      </h1>
      <Marquee gradient autoFill speed={20}>
        {clientImages.map(({ src, alt }) => (
          <img
            key={alt}
            className="mx-4 grayscale transition-all hover:grayscale-0"
            src={src}
            alt={alt}
            loading="lazy"
            width={150}
          />
        ))}
      </Marquee>
    </div>
  )
}
