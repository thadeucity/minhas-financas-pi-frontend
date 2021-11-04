import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

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

const ViewDream: NextPage = () => (
  <div>
    <Head>
      <title>Sonhos</title>
    </Head>

    <AppContainer>
      <AppBlock css={dreamsContainerCss}>
        <TopBar title="Sonhos" backHref="/dreams" />

        <Card css={newDreamFormCardCss}>
          <h2>Viagem para a Grécia</h2>
          <strong>Valor: R$ 15.000,00</strong>
          <p>Prazo: 01/01/2022</p>
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
