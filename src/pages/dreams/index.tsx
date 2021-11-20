import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import Link from 'next/link';
import { parseCookies } from 'nookies';
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

        <Link href="/dreams/new" passHref>
          <a className="button">
            <Button>Adicionar</Button>
          </a>
        </Link>
      </AppBlock>
    </AppContainer>
  </div>
);

export default Dreams;

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
