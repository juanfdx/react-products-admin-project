
// FORMAT CURRENCY
export const formatCurrency = (amountInCents: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amountInCents / 100)
}

// FORMAT DATE
export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

// CAPITALIZE
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}