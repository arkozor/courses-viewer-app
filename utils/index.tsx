export const formatPrice = (price: number): string =>
    `${(Math.round(price * 100) / 100).toFixed(2)}€`
