import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { parseCookies } from 'nookies';
import { motion } from 'framer-motion';
import { AppContainer } from '../Components/Layout/AppContainer';
import { AppBlock } from '../Components/Layout/AppBlock';
import { Card } from '../Components/Layout/Card';
import { homeContainerCss } from '../Components/pages/Home/HomeStyles';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Homepage</title>
    </Head>

    <AppContainer>
      <AppBlock css={homeContainerCss}>
        <Link href="/dreams" passHref>
          <motion.a
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
          >
            <Card className="home__card card__dreams">Sonhos</Card>
          </motion.a>
        </Link>

        <Link href="/expenses" passHref>
          <motion.a
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
          >
            <Card className="home__card card__expenses">Gastos</Card>
          </motion.a>
        </Link>

        <Link href="/tips" passHref>
          <motion.a
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
          >
            <Card className="home__card card__tips">Dicas</Card>
          </motion.a>
        </Link>
      </AppBlock>
    </AppContainer>
  </div>
);

export default Home;

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
