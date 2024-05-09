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
  message: z.string().optional(),
})

export type FormData = z.infer<typeof formSchema>
