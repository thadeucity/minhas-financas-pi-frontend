import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { parseCookies } from 'nookies';
import { AppContainer } from '../../../Components/Layout/AppContainer';
import { AppBlock } from '../../../Components/Layout/AppBlock';
import { TopBar } from '../../../Components/TopBar';
import {
  dreamsContainerCss,
  newDreamFormCardCss,
} from '../../../Components/pages/Dreams/DreamsStyles';
import { Button } from '../../../Components/Button';
import { Card } from '../../../Components/Layout/Card';
import { ProgressBar } from '../../../Components/pages/Dreams/DreamCardStyles';
import { readDreamIO } from '../../../io/readDream';

const ViewDream: NextPage = ({ dream }) => (
  <div>
    <Head>
      <title>Sonhos</title>
    </Head>

    <AppContainer>
      <AppBlock css={dreamsContainerCss}>
        <TopBar title="Sonhos" backHref="/dreams" />

        <Card css={newDreamFormCardCss}>
          <h2>{dream?.name || ''}</h2>
          <strong>
            Valor: {`R$ ${(Number(dream.value || '0') / 100).toFixed(2)}`}
          </strong>
          <p>Prazo: {new Date(dream.deadline).toLocaleDateString('pt-br')}</p>
        </Card>

        <Card css={newDreamFormCardCss}>
          <strong>
            R$ 11.500,00 <span>de</span> R$ 15.000,00
          </strong>
          <ProgressBar progress={0.5} />
          <p>Você já guardou 76% do dinheiro necessário</p>

          <p>Faltam apenas 14x de R$ 250,00</p>
        </Card>

        <Card css={newDreamFormCardCss}>
          <p>R$12.000,00</p>
        </Card>

        <Card css={newDreamFormCardCss}>
          <p>R$1000,00</p>
        </Card>

        <Button>Adicionar Valor</Button>
        <Button>Remover Valor</Button>
      </AppBlock>
    </AppContainer>
  </div>
);

export default ViewDream;

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

  const [dream, _error] = await readDreamIO(
    { dreamId: ctx.query.dreamId },
    ctx,
  );

  return {
    props: {
      dream,
    },
  };
};
