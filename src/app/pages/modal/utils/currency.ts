export const formatCurrency = (value: number | string | undefined): string => {
  const numericValue = Number(value);
  if (isNaN(numericValue)) {
    return '';
  }

  const formattedValue = numericValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formattedValue;
};
