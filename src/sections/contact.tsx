import Logo from '@/assets/logo.svg'

interface ContactInfoItemProps {
  title: string
  value: { name: string; href: string }[]
}

export const Contact = () => {
  const getYear = new Date().getFullYear()

  return (
    <div className="container mx-auto max-w-7xl px-4" id="contact">
      <div className="grid grid-cols-1 gap-4 py-12 md:grid-cols-3 lg:grid-cols-5 lg:justify-items-center lg:space-x-8">
        <ContactInfoResume />
        <ContactInfoItems
          title="Menu"
          value={[
            { name: 'Início', href: '#' },
            { name: 'Sobre nós', href: '#' },
            { name: 'Clientes', href: '#' },
            { name: 'Produtos', href: '#' },
            { name: 'Contato', href: '#' },
          ]}
        />
        <ContactInfoItems
          title="Redes sociais"
          value={[
            {
              name: 'Instagram',
              href: 'https://www.instagram.com/tapetesetal.contato/',
            },
            {
              name: 'Whatsapp',
              href: 'https://api.whatsapp.com/send?phone=5575991181035&text=Ol%C3%A1%2C%20vim%20do%20seu%20site.',
            },
          ]}
        />
      </div>
      <div className="w-full space-y-3 py-4 text-center">
        <p className="space-y-2 text-xs text-gray-500">
          Tapetes & Tal - 43.627.021/0001-44 - Copyright {getYear} © todos os
          direitos reservados
        </p>
        <a
          href="https://adrielgama.dev"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-gray-500 hover:text-tet-orange-300"
        >
          Desenvolvido por: adrielgama.dev
        </a>
      </div>
    </div>
  )
}

const ContactInfoResume = () => {
  const items = [
    {
      href: 'https://goo.gl/maps/Yd5GnGXN2TPZnVMF6',
      description: 'R. Barra Avenida, 870 - Mangabeira, Feira de Santana, BA',
    },
    {
      href: 'https://api.whatsapp.com/send?phone=5575991181035&text=Ol%C3%A1%2C%20vim%20do%20seu%20site.',
      description: '(75) 9 9118-1035',
    },
    {
      href: 'mailto:contato.tapetesetal@gmail.com',
      description: 'contato.tapetesetal@gmail.com',
    },
    {
      href: '#',
      description: 'www.tapetesetal.com.br',
    },
  ]
  return (
    <div className="space-y-2 py-2">
      <div className="space-y-2">
        <img src={Logo} alt="Logo TAPETES & TAL" width={180} />
      </div>
      <div className="flex flex-col gap-2 text-sm text-gray-500">
        {items.map(({ href, description }) => (
          <a
            key={description}
            href={href}
            target={href !== '#' ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="hover:text-tet-orange-300"
          >
            {description}
          </a>
        ))}
      </div>
    </div>
  )
}

const ContactInfoItems: React.FC<ContactInfoItemProps> = ({ title, value }) => {
  return (
    <div className="space-y-3 py-4">
      <h3 className="font-bold">{title}</h3>
      <div className="flex flex-col gap-2 text-sm text-gray-500">
        {value.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            className="max-w-fit hover:text-tet-orange-300"
            rel="noreferrer"
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  )
}
