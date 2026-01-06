type MaskProps = (value: string) => string

function phone(value: string) {
  value = value
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')

  return value
}

function email(value: string) {
  // Email não precisa de máscara, apenas retorna o valor
  return value
}

const masks: Record<string, MaskProps> = {
  phone,
  email,
}

export { masks, phone, email, type MaskProps }
