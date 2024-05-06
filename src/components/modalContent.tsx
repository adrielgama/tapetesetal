import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { formSchema } from '@/helpers/schema'
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
import { Form, FormField, FormControl, FormMessage, FormItem } from './ui/form'
import { Input } from './ui/input'

type FormData = z.infer<typeof formSchema>

export const ModalContent = () => {
  const { toggleModal } = useStore()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log('Dados do Formulário:', data)
    toggleModal()
  }

  return (
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Nome */}
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Nome" />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" {...field} placeholder="E-mail" />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            {/* Telefone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Telefone" />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <div className="flex gap-2">
              {/* Altura */}
              <FormField
                control={form.control}
                name="height"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Altura" />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Largura */}
              <FormField
                control={form.control}
                name="width"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Largura" />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            {/* Mensagem */}
            <FormField
              control={form.control}
              name="message"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Mensagem" />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="submit" variant="secondary" onClick={toggleModal}>
                  Enviar
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </DialogContent>
  )
}
