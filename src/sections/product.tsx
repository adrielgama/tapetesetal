import { useState, useEffect } from 'react'

import BenefitsFloorMat from '@/assets/images/floor-mat-1.webp'
import AdvantagesFloorMat1 from '@/assets/images/floor-mat-2.webp'
import AdvantagesFloorMat2 from '@/assets/images/floor-mat-3.webp'
import AdvantagesFloorMat3 from '@/assets/images/floor-mat-4.webp'
import AdvantagesFloorMat4 from '@/assets/images/floor-mat-5.webp'
import AdvantagesFloorMat5 from '@/assets/images/floor-mat-6.webp'

export const Product = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const advantageImages = [
    AdvantagesFloorMat1,
    AdvantagesFloorMat2,
    AdvantagesFloorMat3,
    AdvantagesFloorMat4,
    AdvantagesFloorMat5,
  ]
  const advantages = [
    '✓ Antiderrapante',
    '✓ Antichamas',
    '✓ Produtos de primeira linha',
    '✓ Retenção de até 70% da sujeira',
    '✓ Resistência ao sol e à chuva',
    '✓ Facilidade na manutenção',
    '✓ Garantia contra defeitos de fábrica',
    '✓ Durabilidade superior',
  ]

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % advantageImages.length
      )
    }, 5000)

    return () => clearInterval(imageInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="bg-slate-50 py-24" id="product">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="pb-4 text-4xl font-bold text-orange-950">O Produto</h1>
        <div className="relative flex flex-col items-center justify-center gap-4 pt-8 lg:flex-row lg:gap-12">
          <img
            src={BenefitsFloorMat}
            alt="Tapete"
            width={400}
            className="z-10 shadow-lg"
          />
          <div className="z-10 mx-2 space-y-4 pt-4 text-center lg:pt-0">
            <h1 className="text-3xl font-bold text-tet-orange-400">
              Benefícios
            </h1>
            <p className="max-w-2xl text-justify text-sm">
              Nosso capacho de vinílico combina durabilidade excepcional com um
              custo de manutenção muito baixo, sendo a escolha perfeita para
              ambientes com alto fluxo de pessoas. Suas propriedades
              antiderrapantes e eficácia na retenção de sujeira garantem
              segurança e higiene para uma variedade de locais, incluindo
              condomínios, portarias, residências, clínicas, escolas, lavabos,
              banheiros e elevadores. Invista em um produto prático e de
              qualidade para manter seus espaços limpos e seguros.
            </p>
          </div>
          <span className="lg:absolute lg:bottom-8 lg:left-10 lg:h-[400px] lg:w-[400px] lg:rounded-md lg:border-8 lg:border-gray-100" />
          <span className="lg:absolute lg:-left-8 lg:top-20 lg:h-[400px] lg:w-[400px] lg:rounded-md lg:border-8 lg:border-gray-100" />
        </div>
        <div className="relative mt-4 flex flex-col-reverse items-center justify-center gap-4 lg:mt-16 lg:flex-row lg:gap-12">
          <div className="z-10 space-y-4 text-center">
            <h1 className="text-3xl font-bold text-tet-orange-400">
              Vantagens
            </h1>
            <ul className="grid list-inside grid-cols-1 gap-2 pt-4 text-justify md:grid-cols-2">
              {advantages.map((data) => (
                <li key={data} className="text-sm text-gray-700">
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={advantageImages[currentImageIndex]}
            alt="Tapete"
            width={400}
            className="z-10"
          />
          <span className="lg:absolute lg:-bottom-8 lg:right-10 lg:h-[400px] lg:w-[400px] lg:rounded-md lg:border-8 lg:border-gray-100" />
          <span className="lg:absolute lg:-right-8 lg:-top-9 lg:h-[400px] lg:w-[400px] lg:rounded-md lg:border-8 lg:border-gray-100" />
        </div>
      </div>
    </section>
  )
}
