export const formatCurrency = (value: string | number) =>
  (Number(value || '0') / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
