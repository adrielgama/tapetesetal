import { MenuIcon } from 'lucide-react'

import LogoTET from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet'
import useStore from '@/helpers/useStore'

import { DialogTrigger } from './ui/dialog'

export default function Navbar() {
  const { toggleModal } = useStore()
  const navItems = [
    { title: 'Sobre nós', href: '#' },
    { title: 'Clientes', href: '#' },
    { title: 'Produto', href: '#' },
    { title: 'Contato', href: '#' },
  ]

  return (
    <header className="sticky top-0 flex h-20 w-full shrink-0 items-center bg-white px-4 shadow-sm md:px-6">
      <Sheet>
        <div className="flex w-full items-center justify-between">
          <a className="mr-6 lg:flex" href="#">
            <img src={LogoTET} alt="logo" width={240} />
            <span className="sr-only">Tapetes & Tal</span>
          </a>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent side="left" className="bg-white">
          <a className="mr-6" href="#">
            <img src={LogoTET} alt="logo" width={240} />
            <span className="sr-only">Tapetes & Tal</span>
          </a>
          <div className="grid gap-2 py-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                className="flex w-full items-center py-2 text-lg font-semibold text-tet-gray-400"
                href={item.href}
              >
                {item.title}
              </a>
            ))}
          </div>
          <DialogTrigger asChild>
            <Button
              onClick={toggleModal}
              className="bg-tet-orange-300 text-white hover:bg-tet-gray-400"
            >
              Simule agora
            </Button>
          </DialogTrigger>
        </SheetContent>
      </Sheet>
      <nav className="ml-auto hidden gap-6 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.title}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:text-tet-orange-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
            href={item.href}
          >
            {item.title}
          </a>
        ))}
        <DialogTrigger asChild>
          <Button
            onClick={toggleModal}
            className="bg-tet-orange-300 text-white hover:bg-tet-gray-400"
          >
            Simule agora
          </Button>
        </DialogTrigger>
      </nav>
    </header>
  )
}
