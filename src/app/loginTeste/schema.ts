import { z } from 'zod'

export const schema = z.object({
  email: z.string().min(9, 'Por favor, digite um e-mail válido'),
  password: z.string().min(9, 'Por favor, digite um e-mail válido')
})