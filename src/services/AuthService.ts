import { z } from 'zod';

import { ValidationError } from './errors';
import { loginSchema } from '@/schemas/login.schema';


export async function signIn(credentials: unknown) {
  try {
    const validatedCredentials = loginSchema.parse(credentials);

    console.log('Credenciais validadas. Enviando para a API...', validatedCredentials);
    return { success: true, user: { name: 'Usuário Logado' } };

  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError(
        'Dados do formulário inválidos.',
        error.flatten().fieldErrors,
      );
    }

    console.error('Erro inesperado no serviço de login:', error);
    throw new Error('Não foi possível realizar o login. Tente novamente mais tarde.');
  }
}