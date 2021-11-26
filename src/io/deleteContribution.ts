import { setupAPIClient } from '../services/api';

export const deleteContributionIO = async (id: string) => {
  const api = setupAPIClient();

  return api
    .delete(`/contributions/${id}`)
    .then(res => [res.data, null])
    .catch(err => [null, err]);
};
