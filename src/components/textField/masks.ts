const floatParser = (value: string) => {
  if (!value) return value;
  const onlyNums = String(value).replace(/[^\d]/g, '');
  let number = '' + onlyNums;
  if (onlyNums.length <= 2) {
    while (number.length <= 2) {
      number = '0' + number;
    }
  }
  return parseFloat(`${number.slice(0, number.length - 2)}.${number.slice(number.length - 2, number.length)}`).toFixed(
    2
  );
};

const floatFormatter = (value: string, digits = 2) => {
  if (!value) return value;
  if (value === '0.00') return '';

  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: digits,
  }).format(Number(value));
};

const currencyFormatter = (value: string) => {
  if (!value) return value;

  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));
};

const parse = (value: string) => {
  return value.replace(/\D/g, '');
};

export const number = (value: string) => {
  return parse(value);
};

export const cpf = {
  format: (value: string) => {
    return value
      ?.replace(/\D/g, '')
      ?.replace(/(\d{3})(\d)/, '$1.$2')
      ?.replace(/(\d{3})(\d)/, '$1.$2')
      ?.replace(/(\d{3})(\d{1,2})/, '$1-$2')
      ?.replace(/(-\d{2})\d+?$/, '$1');
  },
  parse,
};

export const cnpj = {
  format: (value: string) => {
    return value
      ?.replace(/\D/g, '')
      ?.replace(/(\d{2})(\d)/, '$1.$2')
      ?.replace(/(\d{3})(\d)/, '$1.$2')
      ?.replace(/(\d{3})(\d)/, '$1/$2')
      ?.replace(/(\d{4})(\d)/, '$1-$2')
      ?.replace(/(-\d{2})\d+?$/, '$1');
  },
  parse,
};

export const cpfCnpj = {
  format: (value: string) => {
    if (value.length <= 11) {
      return cpf.format(value);
    }
    return cnpj.format(value);
  },
  parse,
};

export const cep = {
  format: (value: string) => {
    return value
      ?.replace(/\D/g, '')
      ?.replace(/(\d{5})(\d)/, '$1-$2')
      ?.replace(/(-\d{3})\d+?$/, '$1');
  },
  parse,
};

export const telefone = {
  format: (value: string) => {
    if (!value) return;

    if (value.length < 11) {
      return value
        ?.replace(/\D/g, '')
        ?.replace(/(\d{2})(\d)/, '($1) $2')
        ?.replace(/(\d{4})(\d)/, '$1-$2')
        ?.replace(/(-\d{4})\d+?$/, '$1');
    } else {
      return value
        ?.replace(/\D/g, '')
        ?.replace(/(\d{2})(\d)/, '($1) $2')
        ?.replace(/(\d{5})(\d)/, '$1-$2')
        ?.replace(/(-\d{4})\d+?$/, '$1');
    }
  },
  parse,
};

export const decimal = {
  format: (value: string) => floatFormatter(value),
  parse: floatParser,
};

export const numero = {
  format: (value: string) => {
    return value?.replace(/\D/g, '');
  },
  parse: (value: string) => {
    return value?.replace(/\D/g, '');
  },
};

export const valor = {
  format: (value: string) => currencyFormatter(value),
  parse: floatParser,
};
