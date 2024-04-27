import { ModalContent } from './components/modalContent'
import Navbar from './components/navbar'
import { Dialog } from './components/ui/dialog'
import useStore from './helpers/useStore'

function App() {
  const { isModalOpen } = useStore()
  return (
    <>
      <Dialog open={isModalOpen}>
        <Navbar />
        <h1>Tapetes e Tal</h1>
        <ModalContent />
      </Dialog>
    </>
  )
}

export default App
