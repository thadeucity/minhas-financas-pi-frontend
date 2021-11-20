import { setupAPIClient } from '../services/api';

interface LoginIOProps {
  email: string;
  password: string;
}

interface SuccessLoginResponseProps {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export const loginIO = async ({ email, password }: LoginIOProps) => {
  const api = setupAPIClient();

  return api
    .post<SuccessLoginResponseProps>('/sessions', { email, password })
    .then(res => [res.data, null])
    .catch(err => [null, err]);
};
