import { setupAPIClient } from '../services/api';

interface SignupIOProps {
  name: string;
  email: string;
  password: string;
}

export const signupIO = async ({ name, email, password }: SignupIOProps) => {
  const api = setupAPIClient();

  return api
    .post('/users', { name, email, password })
    .then(res => [res.data, null])
    .catch(err => [null, err]);
};
