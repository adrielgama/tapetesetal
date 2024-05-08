import React, { Suspense } from 'react'

import CookieConsent from './components/cookieConsent'
import ErrorBoundary from './components/errorBooundary'
import { ModalContent } from './components/modalContent'
import Navbar from './components/navbar'
import { ResultModal } from './components/resultModal'
import { Dialog } from './components/ui/dialog'
import { Toaster } from './components/ui/sonner'
import WhatsAppButton from './components/whatsappFloat'
import useResultStore from './helpers/useResultStore'
import useStore from './helpers/useStore'
import { About, Clients, Footer, Product, Showcase, Stats } from './sections'

const LazyMap = React.lazy(() => import('@/sections/contact'))

function App() {
  const { isModalOpen } = useStore()
  const { result } = useResultStore()
  return (
    <>
      <Toaster />
      <Dialog open={isModalOpen}>
        <Navbar />
        <main role="main">
          <Showcase />
          <Stats />
          <About />
          <Clients />
          <Product />
          <ErrorBoundary
            fallback={
              <div>Something went wrong and the map could not be loaded.</div>
            }
          >
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMap />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        {/* ----- */}
        {result ? <ResultModal /> : <ModalContent />}
        {/* <ResultModal /> */}
        <WhatsAppButton />
        <CookieConsent />
      </Dialog>
    </>
  )
}

export default App
