import { ModalContent } from './components/modalContent'
import Navbar from './components/navbar'
import { Dialog } from './components/ui/dialog'
import WhatsAppButton from './components/whatsappFloat'
import useStore from './helpers/useStore'
import { About, Clients, Showcase, Stats } from './sections'

function App() {
  const { isModalOpen } = useStore()
  return (
    <>
      <Dialog open={isModalOpen}>
        <Navbar />
        <Showcase />
        <Stats />
        <About />
        <Clients />
        <ModalContent />
        <WhatsAppButton />
      </Dialog>
    </>
  )
}

export default App
