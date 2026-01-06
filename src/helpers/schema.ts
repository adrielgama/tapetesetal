import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 letras' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().refine(
    (phone) => {
      const cleaned = phone.replace(/\D/g, '')
      return cleaned.length === 10 || cleaned.length === 11
    },
    {
      message: 'Telefone inválido',
    }
  ),
  height: z
    .string()
    .refine((height) => /^\d+$/.test(height) && !height.includes('.'), {
      message: 'Informe em centímetros (ex: 50, não 0.50)',
    }),
  width: z
    .string()
    .refine((width) => /^\d+$/.test(width) && !width.includes('.'), {
      message: 'Informe em centímetros (ex: 50, não 0.50)',
    }),
  message: z.string().optional(),
})

export type FormData = z.infer<typeof formSchema>
