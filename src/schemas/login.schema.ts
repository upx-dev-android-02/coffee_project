import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'O e-mail fornecido não é válido.' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }),
});


export type LoginCredentials = z.infer<typeof loginSchema>;