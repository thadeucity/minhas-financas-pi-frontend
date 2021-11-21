import { setupAPIClient } from '../services/api';

interface CreateDreamIOProps {
  title: string;
  value: number;
  deadline: string;
}

export const createDreamIO = async ({
  title,
  value,
  deadline,
}: CreateDreamIOProps) => {
  const api = setupAPIClient();

  return api
    .post('/dreams', { name: title, value, deadline })
    .then(res => [res.data, null])
    .catch(err => [null, err]);
};
