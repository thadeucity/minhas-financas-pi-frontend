import React, { useCallback } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

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
import { createDreamSchema } from '../../Components/pages/Dreams/schemas/createDreamSchema';
import { createDreamIO } from '../../io/createDream';

interface NewDreamFormData {
  title: string;
  value: string;
  deadline: string;
}

const NewDream: NextPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<NewDreamFormData>({
    resolver: yupResolver(createDreamSchema, { abortEarly: false }),
  });

  const onSubmit: SubmitHandler<NewDreamFormData> = useCallback(
    async data => {
      setIsLoading(true);
      console.log(data.value);

      const [res, err] = await createDreamIO({
        title: data.title,
        value: Number(data.value.replace(/\D/g, '')),
        deadline: data.deadline,
      });

      if (err) {
        console.error(err); // TODO - Add error toast
      } else {
        console.log({ res, success: true }); // TODO - Add success toast
        router.push('/dreams');
      }
      setIsLoading(false);
    },
    [router],
  );

  return (
    <div>
      <Head>
        <title>Sonhos</title>
      </Head>

      <AppContainer>
        <AppBlock css={dreamsContainerCss}>
          <TopBar title="Sonhos" backHref="/dreams" />

          <Card
            css={newDreamFormCardCss}
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
          >
            <NewDreamForm>
              <Input
                type="text"
                label="Título"
                error={formState.errors?.title}
                {...register('title')}
              />
              <Input
                type="text"
                label="Valor"
                error={formState.errors?.value}
                maskFunction={val =>
                  val.replace(/[^\d]/g, '').replace(/(\d+)(\d\d)$/g, '$1,$2')
                }
                {...register('value')}
              />
              <Input
                type="date"
                label="Prazo"
                error={formState.errors?.deadline}
                {...register('deadline')}
              />
            </NewDreamForm>
          </Card>

          <Button
            isLoading={isLoading}
            type="button"
            onClick={handleSubmit(onSubmit)}
            loadingText="Criando ..."
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 120 }}
            transition={{ delay: 0.2 }}
          >
            Adicionar
          </Button>
        </AppBlock>
      </AppContainer>
    </div>
  );
};

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
