import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { parseCookies } from 'nookies';
import { AppContainer } from '../../Components/Layout/AppContainer';
import { AppBlock } from '../../Components/Layout/AppBlock';
import { TopBar } from '../../Components/TopBar';
import {
  dreamsContainerCss,
  NewDreamForm,
  newDreamFormCardCss,
} from '../../Components/pages/Dreams/DreamsStyles';
import { Button } from '../../Components/Button';
import { Card } from '../../Components/Layout/Card';
import { Input } from '../../Components/Inputs';

const NewDream: NextPage = () => (
  <div>
    <Head>
      <title>Sonhos</title>
    </Head>

    <AppContainer>
      <AppBlock css={dreamsContainerCss}>
        <TopBar title="Sonhos" backHref="/" />

        <Card css={newDreamFormCardCss}>
          <NewDreamForm>
            <Input name="title" type="text" label="Título" />
            <Input name="value" type="text" label="Valor" />
            <Input name="deadline" type="text" label="Prazo" />
          </NewDreamForm>
        </Card>

        <Button>Adicionar</Button>
      </AppBlock>
    </AppContainer>
  </div>
);

export default NewDream;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookies = parseCookies(ctx);

  const token = cookies['@PiMinhasFinancas:token'];

  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
