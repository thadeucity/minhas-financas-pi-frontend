import { setupAPIClient } from '../services/api';

interface DreamData {
  id: string;
  name: string;
  value: string;
  deadline: string;
  created_at: string;
  updated_at: string;
}

export const listUserDreamsIO = async (ctx: any) => {
  const api = setupAPIClient(ctx);

  const [response, error] = await api
    .get<DreamData[]>('/dreams')
    .then(res => [res.data, null])
    .catch(err => [null, err]);

  return [response || [], !!error];
};
