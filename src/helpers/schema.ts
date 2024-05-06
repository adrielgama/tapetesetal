import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 letras' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().refine((phone) => /^\d{10,11}$/.test(phone), {
    message: 'Telefone inválido',
  }),
  height: z.string().refine((height) => /^\d+(\.\d+)?$/.test(height), {
    message: 'Altura inválida',
  }),
  width: z.string().refine((width) => /^\d+(\.\d+)?$/.test(width), {
    message: 'Largura inválida',
  }),
  message: z
    .string()
    .min(10, { message: 'Mensagem deve ter pelo menos 10 letras' })
    .optional(),
})

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  } else if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  } else {
    return phone
  }
}
