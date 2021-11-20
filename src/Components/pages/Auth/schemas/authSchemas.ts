import { string as yupString, object as yupObject, ref as yupRef } from 'yup';

export const signupSchema = yupObject().shape({
  name: yupString()
    .required('Nome obrigatório')
    .min(3, 'Nome dever ter no mínimo 3 caracteres')
    .max(90, 'Nome dever ter no máximo 90 caracteres'),
  email: yupString().required('Email obrigatório').email('Email inválido'),
  password: yupString()
    .required('Senha obrigatória')
    .min(6, 'Senha dever ter no mínimo 6 caracteres')
    .max(64, 'Senha dever ter no máximo 64 caracteres'),
  'password-confirm': yupString().test(
    'equal',
    'Senhas não conferem',
    function (v) {
      const ref = yupRef('password');
      return v === this.resolve(ref);
    },
  ),
});

export const loginSchema = yupObject().shape({
  email: yupString().required('Email obrigatório').email('Email inválido'),
  password: yupString()
    .required('Senha obrigatória')
    .min(6, 'Senha inválida')
    .max(64, 'Senha inválida'),
});
