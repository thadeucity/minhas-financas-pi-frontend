import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { AppContainer } from '../../Components/Layout/AppContainer';
import { authCardCss, AuthForm } from '../../Components/pages/Auth/AuthStyles';
import { Card } from '../../Components/Layout/Card';
import { Input } from '../../Components/Inputs';
import { Button } from '../../Components/Button';

const ForgotPassword: NextPage = () => (
  <div>
    <Head>
      <title>Esqueci Minha Senha</title>
    </Head>

    <AppContainer>
      <Card css={authCardCss}>
        <h1>Esqueci Minha Senha</h1>

        <AuthForm>
          <Input name="email" type="email" label="Email" />
          <Button>Recuperar</Button>
          <Link href="/auth/signup" passHref>
            <a>Criar conta</a>
          </Link>
          <Link href="/auth/login" passHref>
            <a>Login</a>
          </Link>
        </AuthForm>
      </Card>
    </AppContainer>
  </div>
);

export default ForgotPassword;
