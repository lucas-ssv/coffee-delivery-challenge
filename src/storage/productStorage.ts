import { Product } from "../contexts/ProductContext";

const productKey = '@coffee-delivery:products-on-cart'

export function getProductsOnStorage() {
  return JSON.parse(localStorage.getItem(productKey)!) as Product[]
}

export function addProductsOnStorage(products: Product[]) {
  localStorage.setItem(productKey, JSON.stringify(products))
}

export function removeProductOnStorage(slug: string) {
  const products: Product[] = JSON.parse(localStorage.getItem(productKey)!)
  const productIndex = products.findIndex((product) => product.slug === slug)

  if (productIndex >= 0) {
    const product = products[productIndex]
    if (product.amount > 1) {
      product.amount--
    } else {
      products.splice(productIndex, 1)
    }
    addProductsOnStorage(products)
  }
}

export function removeAllProductOnStorage(slug: string) {
  const products: Product[] = JSON.parse(localStorage.getItem(productKey)!)
  const productIndex = products.findIndex((product) => product.slug === slug)

  if (productIndex >= 0) {
    products.splice(productIndex, 1)
  }
  addProductsOnStorage(products)
}