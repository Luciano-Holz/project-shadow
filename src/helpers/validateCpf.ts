const isValidCPF = (cpf: string): boolean => {
  let sum = 0;
  let rest: number;
  const strCPF = String(cpf).replace(/[^\d]/g, '');
  if (strCPF.length !== 11) return false;
  if (
    [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ].indexOf(strCPF) !== -1
  )
    return false;
  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(strCPF.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(strCPF.substring(10, 11))) return false;

  return true;
};

const format = (cpf: string): string => {
  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return cpf;
};

export const validateCpf = (cpfWallet: string): string => {
  const valid = isValidCPF(cpfWallet);
  if (valid === true) {
    const cpfFormat = format(cpfWallet);
    return cpfFormat;
  }
  throw new Error('Cpf is Invalid');
};
