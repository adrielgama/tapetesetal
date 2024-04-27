import { Copy } from 'lucide-react'

import useStore from '@/helpers/useStore'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

export const ModalContent = () => {
  const { toggleModal } = useStore()
  return (
    <div>
      <DialogContent
        className="bg-white sm:max-w-md"
        onEscapeKeyDown={toggleModal}
        onPointerDownOutside={toggleModal}
      >
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={toggleModal}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </div>
  )
}
