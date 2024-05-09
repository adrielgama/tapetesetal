import React, { useState, useEffect } from 'react'

import { getCookie, setCookie } from '@/lib/cookies'

import { Button } from './ui/button'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './ui/dialog'

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = getCookie('cookieConsentTeT')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setCookie('cookieConsentTeT', 'accepted', 365)
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <Dialog>
      <div className="fixed inset-x-0 bottom-0 z-50 max-w-96  px-4 pb-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col space-y-4 rounded-lg bg-tet-gray-400/95 p-4 text-white shadow-lg md:flex md:items-center md:justify-between md:p-6"
          data-shadcn="default"
        >
          <span className="pb-4 text-justify text-sm">
            Usamos cookies em nosso site para fornecer a experiência mais
            relevante, lembrando suas preferências e visitas repetidas. Ao
            clicar em &quot;Aceitar Cookies&quot;, você concorda com o uso de
            TODOS os cookies.
          </span>
          <div className="flex w-full justify-between gap-2">
            <DialogTrigger asChild>
              <Button variant="link">Ver mais</Button>
            </DialogTrigger>
            <Button
              onClick={handleAccept}
              className="bg-green-200 text-slate-900 hover:bg-green-500 hover:text-white"
            >
              Aceitar Cookies
            </Button>
          </div>
        </div>
      </div>
      <DialogContent className="bg-white">
        <span className="relative m-auto flex w-full max-w-md flex-col rounded-lg bg-white p-8 text-sm shadow-lg">
          <span className="text-lg font-bold">Termos de Uso dos Cookies</span>
          <ul className="mt-2 list-none pl-5">
            Este site utiliza cookies para melhorar a navegação e oferecer uma
            experiência mais personalizada. Aqui você pode consultar todos os
            tipos de cookies que usamos:
            <li>
              ✓ Cookies Essenciais: São necessários para o funcionamento do
              site.
            </li>
            <li>
              ✓ Cookies de Desempenho: Ajudam a entender como os visitantes
              interagem com o site.
            </li>
            <li>
              ✓ Cookies de Publicidade: Usados para oferecer publicidade mais
              direcionada.
            </li>
          </ul>
          <span className="mt-8 text-sm font-semibold">
            Ao aceitar, você concorda com o uso de todos os cookies mencionados.
            Para mais informações, visite nossa Política de Privacidade.
          </span>
          <DialogClose className="mt-4 rounded-lg bg-gray-300 px-4 py-2 text-black hover:bg-gray-400">
            Fechar
          </DialogClose>
        </span>
      </DialogContent>
    </Dialog>
  )
}

export default CookieConsent
