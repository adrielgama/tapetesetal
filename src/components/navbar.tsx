import { MenuIcon, MountainIcon } from 'lucide-react'

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
    <header className="flex h-20 w-full shrink-0 items-center bg-white px-4 shadow-sm md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <a className="mr-6 hidden lg:flex" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <div className="grid gap-2 py-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                className="flex w-full items-center py-2 text-lg font-semibold text-white"
                href={item.href}
              >
                {item.title}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <a className="mr-6 hidden lg:flex" href="#">
        <span className="sr-only">Acme Inc</span>
      </a>
      <nav className="ml-auto hidden gap-6 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.title}
            className="hover:text-tet-orange-300 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
            href={item.href}
          >
            {item.title}
          </a>
        ))}
        <DialogTrigger asChild>
          <Button onClick={toggleModal}>Simule agora</Button>
        </DialogTrigger>
      </nav>
    </header>
  )
}
