import React, { Suspense } from 'react'

import CookieConsent from './components/cookieConsent'
import { ModalContent } from './components/modalContent'
import Navbar from './components/navbar'
import { Dialog } from './components/ui/dialog'
import WhatsAppButton from './components/whatsappFloat'
import useStore from './helpers/useStore'
import { About, Clients, Footer, Product, Showcase, Stats } from './sections'

const LazyMap = React.lazy(() => import('@/sections/contact'))

function App() {
  const { isModalOpen } = useStore()
  return (
    <>
      <Dialog open={isModalOpen}>
        <Navbar />
        <main role="main">
          <Showcase />
          <Stats />
          <About />
          <Clients />
          <Product />
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMap />
          </Suspense>
        </main>
        <Footer />
        {/* ----- */}
        <ModalContent />
        <WhatsAppButton />
        <CookieConsent />
      </Dialog>
    </>
  )
}

export default App
