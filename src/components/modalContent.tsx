import { useState } from 'react'
import { formatCurrency } from '@/helpers/formatCurrency'
import { FormData, formSchema } from '@/helpers/schema'
import useResultStore from '@/helpers/useResultStore'
import useStore from '@/helpers/useStore'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  VisuallyHidden,
} from './ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { InputMask } from './ui/input-mask'
import { Textarea } from './ui/textarea'

const { VITE_EMAILJS_USERID: userId } = import.meta.env
const { VITE_EMAILJS_SERVICEID: serviceId } = import.meta.env
const { VITE_EMAILJS_TEMPLATEID: templateId } = import.meta.env

export const ModalContent = () => {
  const { toggleModal } = useStore()
  const { setResult, setDimensions } = useResultStore()
  const [loading, setLoading] = useState(false)
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {}
  )

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      height: '',
      width: '',
      message: '',
    },
  })

  emailjs.init(userId)

  const handleFieldTouch = (fieldName: string) => {
    setTimeout(() => {
      setTouchedFields((prev) => ({ ...prev, [fieldName]: true }))
    }, 500) // Debounce de 500ms
  }

  const onSubmit = async (data: FormData) => {
    const height = parseFloat(data.height)
    const width = parseFloat(data.width)

    if (!isNaN(height) && !isNaN(width)) {
      const totalSquareMeters = (height * width) / 10000
      const totalPrice = formatCurrency(totalSquareMeters * 650)

      // Remove máscara do telefone para envio
      const cleanPhone = data.phone.replace(/\D/g, '')

      const templateParams = {
        name: data.name,
        email: data.email,
        phone: cleanPhone,
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
          toggleModal()
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
      <VisuallyHidden>
        <DialogTitle>Formulário de Orçamento</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixo para solicitar um orçamento.
        </DialogDescription>
      </VisuallyHidden>
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
                      placeholder="Seu nome"
                      onChange={(e) => {
                        field.onChange(e)
                        handleFieldTouch('name')
                      }}
                      value={field.value ?? ''}
                      className="placeholder:text-xs md:placeholder:text-sm"
                    />
                  </FormControl>
                  {touchedFields.name && (
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  )}
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
                    <InputMask
                      mask="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...field}
                      onChange={(value) => {
                        field.onChange(value)
                        handleFieldTouch('email')
                      }}
                      className="placeholder:text-xs md:placeholder:text-sm"
                    />
                  </FormControl>
                  {touchedFields.email && (
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  )}
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
                    <InputMask
                      type="tel"
                      mask="phone"
                      placeholder="(99) 99999-9999"
                      {...field}
                      onChange={(value) => {
                        field.onChange(value)
                        handleFieldTouch('phone')
                      }}
                      className="placeholder:text-xs md:placeholder:text-sm"
                    />
                  </FormControl>
                  {touchedFields.phone && (
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  )}
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
                          placeholder="Altura (ex: 50)"
                          onChange={(e) => {
                            field.onChange(e)
                            handleFieldTouch('height')
                          }}
                          value={field.value ?? ''}
                          type="number"
                          className="placeholder:text-xs md:placeholder:text-sm"
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500">
                          cm
                        </span>
                      </div>
                    </FormControl>
                    {touchedFields.height && (
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    )}
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
                          placeholder="Largura (ex: 120)"
                          onChange={(e) => {
                            field.onChange(e)
                            handleFieldTouch('width')
                          }}
                          type="number"
                          value={field.value ?? ''}
                          className="placeholder:text-xs md:placeholder:text-sm"
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500">
                          cm
                        </span>
                      </div>
                    </FormControl>
                    {touchedFields.width && (
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    )}
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
                      onChange={(e) => {
                        field.onChange(e)
                        handleFieldTouch('message')
                      }}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  {touchedFields.message && (
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />

            <DialogDescription className="text-[11px]">
              * Ao simular, enviaremos seus dados por e-mail para que nossa
              equipe possa oferecer uma experiência aprimorada ao finalizar o
              orçamento.
            </DialogDescription>
            <DialogFooter className="sm:justify-start">
              <Button
                type="submit"
                disabled={!form.formState.isValid || loading}
                className="bg-tet-orange-300 text-white disabled:cursor-not-allowed disabled:opacity-50"
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
            </DialogFooter>
          </form>
        </Form>
      </div>
    </DialogContent>
  )
}
