export const formatPrice = (price: number) => new Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)