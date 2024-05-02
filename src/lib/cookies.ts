/**
 * Define um cookie no navegador do usuário.
 * @param name Nome do cookie.
 * @param value Valor do cookie.
 * @param days Número de dias até o cookie expirar.
 */
export function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax; Secure`
}

/**
 * Obtém o valor de um cookie pelo nome.
 * @param name Nome do cookie.
 * @returns O valor do cookie ou undefined se não encontrado.
 */
export function getCookie(name: string): string | undefined {
  const cookies = document.cookie.split('; ').reduce(
    (acc, cookieString) => {
      const [cookieName, cookieValue] = cookieString.split('=')
      acc[decodeURIComponent(cookieName)] = decodeURIComponent(cookieValue)
      return acc
    },
    {} as Record<string, string>
  )
  return cookies[name]
}

/**
 * Deleta um cookie pelo nome.
 * @param name Nome do cookie.
 */
export function deleteCookie(name: string) {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax; Secure`
}
