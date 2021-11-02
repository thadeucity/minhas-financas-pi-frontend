import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { AppContainer } from '../../Components/Layout/AppContainer';
import { authCardCss, AuthForm } from '../../Components/pages/Auth/AuthStyles';
import { Card } from '../../Components/Layout/Card';
import { Input } from '../../Components/Inputs';
import { Button } from '../../Components/Button';

const Login: NextPage = () => (
  <div>
    <Head>
      <title>Login</title>
    </Head>

    <AppContainer>
      <Card css={authCardCss}>
        <h1>Login</h1>

        <AuthForm>
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Password" />
          <Button>LOGIN</Button>
          <Link href="/auth/create-account" passHref>
            <a>Criar conta</a>
          </Link>
          <Link href="/auth/create-account" passHref>
            <a>Esqueci minha senha</a>
          </Link>
        </AuthForm>
      </Card>
    </AppContainer>
  </div>
);

export default Login;
