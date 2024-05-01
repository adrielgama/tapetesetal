import { ModalContent } from './components/modalContent'
import Navbar from './components/navbar'
import { Dialog } from './components/ui/dialog'
import useStore from './helpers/useStore'
import { About, Showcase, Stats } from './sections'

function App() {
  const { isModalOpen } = useStore()
  return (
    <>
      <Dialog open={isModalOpen}>
        <Navbar />
        <Showcase />
        <Stats />
        <About />
        <ModalContent />
      </Dialog>
    </>
  )
}

export default App
