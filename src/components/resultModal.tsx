import useResultStore from '@/helpers/useResultStore'
import useStore from '@/helpers/useStore'

import { Button } from './ui/button'
import { DialogContent, DialogHeader } from './ui/dialog'

export const ResultModal = () => {
  const { toggleModal } = useStore()
  const { result, setResult, dimensions, setDimensions } = useResultStore()
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5575991181035&text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20meu%20or%C3%A7amento%20com%20as%20dimens%C3%B5es%20${dimensions.height}cm%20x%20${dimensions.width}cm%20deu%20${encodeURIComponent(result)}`
  const resetItems = () => {
    setResult('')
    setDimensions({ width: 0, height: 0 })
  }

  return (
    <DialogContent
      className="w-[85vw] bg-white md:max-w-md"
      onEscapeKeyDown={toggleModal}
      onPointerDownOutside={toggleModal}
    >
      <div className="flex flex-col items-center space-y-4">
        <DialogHeader className="text-lg font-bold">
          Resumo do Orçamento
        </DialogHeader>
        <span className="text-sm">
          Dimensões: {dimensions.height}cm x {dimensions.width}cm
        </span>
        <div className="rounded-md border p-8 md:p-12">
          <span>
            O valor estimado é: <span className="font-bold">{result}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button className="bg-green-500 text-white hover:bg-green-600">
            Entrar em Contato pelo WhatsApp
          </Button>
        </a>
        <Button variant="link" onClick={resetItems}>
          Fazer novo orçamento
        </Button>
      </div>
    </DialogContent>
  )
}
