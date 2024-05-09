import { useState } from 'react'

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { formatCurrency } from '@/helpers/formatCurrency'
import { formSchema, FormData } from '@/helpers/schema'
import useResultStore from '@/helpers/useResultStore'
import useStore from '@/helpers/useStore'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from './ui/dialog'
import { Form, FormField, FormControl, FormMessage, FormItem } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const { VITE_EMAILJS_USERID: userId } = import.meta.env
const { VITE_EMAILJS_SERVICEID: serviceId } = import.meta.env
const { VITE_EMAILJS_TEMPLATEID: templateId } = import.meta.env

export const ModalContent = () => {
  const { toggleModal } = useStore()
  const { setResult, setDimensions } = useResultStore()
  const [loading, setLoading] = useState(false)
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  emailjs.init(userId)

  const onSubmit = async (data: FormData) => {
    const height = parseFloat(data.height)
    const width = parseFloat(data.width)

    if (!isNaN(height) && !isNaN(width)) {
      const totalSquareMeters = (height * width) / 10000
      const totalPrice = formatCurrency(totalSquareMeters * 630)

      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        height,
        width,
        message: data.message ?? 'Nenhuma mensagem informada',
        result: totalPrice,
      }

      setLoading(true)

      try {
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          userId
        )
        if (response.status === 200) {
          toast.success('Tudo certo por aqui!', {
            description: 'Seu orçamento foi enviado com sucesso!',
            className: 'bg-green-100 text-green-900',
          })
          setDimensions({ height, width })
          setResult(totalPrice)
        }
      } catch (error) {
        console.error(error)
        if (error instanceof EmailJSResponseStatus) {
          toast.error('Ops. Ocorreu um erro ao enviar o formulário!', {
            description: `Error: ${error.text}`,
            className: 'bg-red-100 text-red-900',
          })
        }
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <DialogContent
      className="w-[85vw] bg-white md:max-w-md"
      onEscapeKeyDown={toggleModal}
      onPointerDownOutside={toggleModal}
    >
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
                    <Input
                      {...field}
                      placeholder="Nome"
                      onChange={field.onChange}
                      value={field.value ?? ''}
                    />
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
                    <Input
                      type="email"
                      {...field}
                      placeholder="E-mail"
                      onChange={field.onChange}
                      value={field.value ?? ''}
                    />
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
                    <Input
                      {...field}
                      placeholder="Telefone"
                      maxLength={11}
                      onChange={field.onChange}
                      type="number"
                      value={field.value ?? ''}
                    />
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
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Altura"
                          onChange={field.onChange}
                          value={field.value ?? ''}
                          type="number"
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500">
                          cm
                        </span>
                      </div>
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
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Largura"
                          onChange={field.onChange}
                          type="number"
                          value={field.value ?? ''}
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500">
                          cm
                        </span>
                      </div>
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
                    <Textarea
                      {...field}
                      placeholder="Mensagem"
                      maxLength={500}
                      onChange={field.onChange}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <DialogDescription className="text-[11px]">
              * Ao simular, enviaremos seus dados por e-mail para que nossa
              equipe possa oferecer uma experiência aprimorada ao finalizar o
              orçamento.
            </DialogDescription>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-tet-orange-300 text-white"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                      Enviando...
                    </>
                  ) : (
                    'Enviar'
                  )}
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </DialogContent>
  )
}
