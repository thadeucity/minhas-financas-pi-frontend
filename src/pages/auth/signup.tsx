import React, { useCallback } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { AppContainer } from '../../Components/Layout/AppContainer';
import { authCardCss, AuthForm } from '../../Components/pages/Auth/AuthStyles';
import { Card } from '../../Components/Layout/Card';
import { Input } from '../../Components/Inputs';
import { Button } from '../../Components/Button';
import { signupSchema } from '../../Components/pages/Auth/schemas/authSchemas';
import { signupIO } from '../../io/signup';
import { useToast } from '../../hooks/Toast';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  'password-confirm': string;
}

const Signup: NextPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { addToast } = useToast();

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema, { abortEarly: false }),
  });

  const onSubmit: SubmitHandler<SignupFormData> = useCallback(
    async data => {
      setIsLoading(true);
      const [res, err] = await signupIO({
        email: data.email,
        password: data.password,
        name: data.name,
      });

      if (err) {
        addToast({ text: 'Erro ao realizar cadastro', type: 'error' });
      } else {
        addToast({ text: 'Cadastro realizado com sucesso', type: 'success' });
        router.push('/auth/login');
      }
      setIsLoading(false);
    },
    [addToast, router],
  );

  return (
    <div>
      <Head>
        <title>Signup</title>
      </Head>

      <AppContainer>
        <Card css={authCardCss}>
          <h1>Signup</h1>

          <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Nome"
              error={formState.errors?.name}
              {...register('name')}
            />
            <Input
              type="email"
              label="Email"
              error={formState.errors?.email}
              {...register('email')}
            />
            <Input
              type="password"
              label="Senha"
              error={formState.errors?.password}
              {...register('password')}
            />
            <Input
              type="password"
              label="Confirmação de Senha"
              error={formState.errors?.['password-confirm']}
              {...register('password-confirm')}
            />
            <Button
              isLoading={isLoading}
              type="submit"
              loadingText="Registrando ..."
            >
              Cadastrar
            </Button>
            <Link href="/auth/login" passHref>
              <a>Login</a>
            </Link>
          </AuthForm>
        </Card>
      </AppContainer>
    </div>
  );
};

export default Signup;
