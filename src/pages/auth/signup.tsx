import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { AppContainer } from '../../Components/Layout/AppContainer';
import { authCardCss, AuthForm } from '../../Components/pages/Auth/AuthStyles';
import { Card } from '../../Components/Layout/Card';
import { Input } from '../../Components/Inputs';
import { Button } from '../../Components/Button';

const Signup: NextPage = () => (
  <div>
    <Head>
      <title>Signup</title>
    </Head>

    <AppContainer>
      <Card css={authCardCss}>
        <h1>Signup</h1>

        <AuthForm>
          <Input name="name" type="text" label="Nome" />
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Senha" />
          <Input
            name="password-confirm"
            type="password"
            label="Confirmação de Senha"
          />
          <Button>Cadastrar</Button>
          <Link href="/auth/login" passHref>
            <a>Login</a>
          </Link>
        </AuthForm>
      </Card>
    </AppContainer>
  </div>
);

export default Signup;
