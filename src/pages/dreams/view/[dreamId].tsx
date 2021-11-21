import React, { useCallback, useMemo } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { parseCookies } from 'nookies';
import { AppContainer } from '../../../Components/Layout/AppContainer';
import { AppBlock } from '../../../Components/Layout/AppBlock';
import { TopBar } from '../../../Components/TopBar';
import {
  contributionCardCss,
  newDreamContainerCss,
  newDreamFormCardCss,
} from '../../../Components/pages/Dreams/DreamsStyles';
import { Button } from '../../../Components/Button';
import { Card } from '../../../Components/Layout/Card';
import { ProgressBar } from '../../../Components/pages/Dreams/DreamCardStyles';
import { readDreamIO } from '../../../io/readDream';
import { ContributionModal } from '../../../Components/Contributions/ContributionModal';
import { createContributionIO } from '../../../io/createContribution';
import { formatCurrency } from '../../../utils/formatCurrency';
import { monthDifference } from '../../../utils/monthDifference';

const ViewDream: NextPage = ({ dream }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [contributionIsWithdrawal, setContributionIsWithdraw] = React.useState<
    boolean | null
  >(null);

  const handleContribution = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleAddValue = useCallback(() => {
    setContributionIsWithdraw(false);
    handleContribution();
  }, [handleContribution]);

  const handleRemoveValue = useCallback(() => {
    setContributionIsWithdraw(true);
    handleContribution();
  }, [handleContribution]);

  const handleSubmitContribution = useCallback(
    value => {
      createContributionIO({
        value: Number(value),
        isNegative: contributionIsWithdrawal,
        dreamId: dream?.id,
      });
    },
    [contributionIsWithdrawal, dream?.id],
  );

  const totalContributionsValue = useMemo(
    () =>
      dream?.contributions.reduce((acc, curr) => {
        if (curr.is_negative) return acc - (curr.value || 0);

        return acc + (curr.value || 0);
      }, 0),
    [dream?.contributions],
  );

  const contributionPercentage = useMemo(
    () => Math.min(totalContributionsValue / dream.value, 1),
    [dream.value, totalContributionsValue],
  );

  const monthsToDeadline = useMemo(
    () => monthDifference(new Date(), new Date(dream.deadline)),
    [dream.deadline],
  );

  const installmentsValue = useMemo(
    () =>
      Math.max((dream.value - totalContributionsValue) / monthsToDeadline, 0),
    [dream.value, monthsToDeadline, totalContributionsValue],
  );

  return (
    <div>
      <Head>
        <title>Sonhos</title>
      </Head>

      <AppContainer>
        <AppBlock css={newDreamContainerCss}>
          <TopBar title="Sonhos" backHref="/dreams" />

          <Card css={newDreamFormCardCss}>
            <h2>{dream?.name || ''}</h2>
            <strong>Valor: {formatCurrency(dream.value)}</strong>
            <p>Prazo: {new Date(dream.deadline).toLocaleDateString('pt-br')}</p>
          </Card>

          <Card css={newDreamFormCardCss}>
            <strong className="value_group">
              {formatCurrency(totalContributionsValue)} <span>de</span>{' '}
              {formatCurrency(dream.value)}
            </strong>
            <ProgressBar progress={0.5} />
            <p className="dream_percentage">
              Você já guardou {(contributionPercentage * 100).toFixed(1)}% do
              dinheiro necessário
            </p>

            <p>
              Faltam apenas {monthsToDeadline}x de{' '}
              {formatCurrency(installmentsValue)}
            </p>
          </Card>

          {dream?.contributions.map(contribution => (
            <Card
              css={[newDreamFormCardCss, contributionCardCss]}
              key={contribution.id}
            >
              <span
                className={`contribution ${
                  contribution.is_negative
                    ? 'contribution_less'
                    : 'contribution_plus'
                }`}
              />
              <p>{formatCurrency(contribution.value)}</p>
            </Card>
          ))}

          <Button onClick={handleAddValue}>Adicionar Valor</Button>
          <Button onClick={handleRemoveValue}>Remover Valor</Button>
        </AppBlock>
      </AppContainer>

      {isModalOpen && (
        <ContributionModal
          isWithdrawal={contributionIsWithdrawal}
          onSubmit={handleSubmitContribution}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

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
    { dreamId: String(ctx.query.dreamId) },
    ctx,
  );

  console.log({ contr: dream?.contributions });

  return {
    props: {
      dream,
    },
  };
};
