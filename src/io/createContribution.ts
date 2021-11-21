import { setupAPIClient } from '../services/api';

interface CreateContributionIOProps {
  dreamId: string;
  value: number;
  isNegative: boolean;
}

export const createContributionIO = async ({
  isNegative,
  value,
  dreamId,
}: CreateContributionIOProps) => {
  const api = setupAPIClient();

  return api
    .post('/contributions', { dreamId, value, isNegative })
    .then(res => [res.data, null])
    .catch(err => [null, err]);
};
