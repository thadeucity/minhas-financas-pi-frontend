import { string as yupString, date as yupDate, object as yupObject } from 'yup';

export const createDreamSchema = yupObject().shape({
  title: yupString()
    .required('Título obrigatório')
    .min(3, 'Título deve ter no mínimo 3 caracteres')
    .max(64, 'Título deve ter no máximo 64 caracteres'),
  value: yupString()
    .required('Valor obrigatório')
    .matches(/^[0-9][0-9,.]+$/, 'Valor inválido'),
  deadline: yupDate()
    .required('Título obrigatório')
    .min(new Date(), 'Deadline deve ser no futuro')
    .max(new Date('2100-01-01'), 'Deadline deve ser antes de 2099'),
});
