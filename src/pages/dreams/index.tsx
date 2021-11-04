import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { AppContainer } from '../../Components/Layout/AppContainer';
import { AppBlock } from '../../Components/Layout/AppBlock';
import { TopBar } from '../../Components/TopBar';
import { DreamCard } from '../../Components/pages/Dreams/DreamCard';
import { dreamsContainerCss } from '../../Components/pages/Dreams/DreamsStyles';
import { Button } from '../../Components/Button';

const Dreams: NextPage = () => (
  <div>
    <Head>
      <title>Sonhos</title>
    </Head>

    <AppContainer>
      <AppBlock css={dreamsContainerCss}>
        <TopBar title="Sonhos" backHref="/" />

        <DreamCard title="Teste" progress={2} editLink="/test" />
        <DreamCard title="Teste" progress={2} editLink="/test" />
        <DreamCard title="Teste" progress={2} editLink="/test" />

        <Button>Adicionar</Button>
      </AppBlock>
    </AppContainer>
  </div>
);

export default Dreams;
