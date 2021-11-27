import React, { useCallback } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { setCookie } from 'nookies';
import { AppContainer } from '../../Components/Layout/AppContainer';
import { authCardCss, AuthForm } from '../../Components/pages/Auth/AuthStyles';
import { Card } from '../../Components/Layout/Card';
import { Input } from '../../Components/Inputs';
import { Button } from '../../Components/Button';
import { loginSchema } from '../../Components/pages/Auth/schemas/authSchemas';
import { loginIO } from '../../io/login';
import { useUser } from '../../hooks/User';
import { useToast } from '../../hooks/Toast';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();
  const { updateUserData } = useUser();
  const { addToast } = useToast();

  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema, { abortEarly: false }),
  });

  const onSubmit: SubmitHandler<LoginFormData> = useCallback(
    async data => {
      setIsLoading(true);
      const [res, err] = await loginIO({
        email: data.email,
        password: data.password,
      });

      if (err) {
        addToast({ text: 'Login ou senha errados', type: 'error' });
      } else {
        setCookie(null, '@PiMinhasFinancas:token', res?.token, {
          maxAge: 60 * 60 * 24, // 1 day
          path: '/',
          sameSite: true,
        });
        updateUserData(res?.user);
        router.push('/');
      }
      setIsLoading(false);
    },
    [addToast, router, updateUserData],
  );

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <AppContainer>
        <Card css={authCardCss}>
          <h1>Login</h1>

          <AuthForm onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              isLoading={isLoading}
              type="submit"
              loadingText="Carregando ..."
            >
              LOGIN
            </Button>
            <Link href="/auth/signup" passHref>
              <a>Criar conta</a>
            </Link>
            <Link href="/auth/forgot-password" passHref>
              <a>Esqueci minha senha</a>
            </Link>
          </AuthForm>
        </Card>
      </AppContainer>
    </div>
  );
};

export default Login;
