import { createContext, ReactNode, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

type ProductContextProps = {
  productsAmount: number
  addProduct: (product: Product) => void
  removeProduct: (slug: string) => void
}

export const ProductContext = createContext({} as ProductContextProps)

type Props = {
  children: ReactNode
}

export type Product = {
  slug: string
  name: string
  price: number
  amount: number
}

export function ProductProvider({ children }: Props) {
  const [product, dispatch] = useReducer(productReducer, {
    products: [] as Product[],
    productsAmount: 0
  })

  function addProduct(product: Product) {
    dispatch({ type: 'ADD_PRODUCT', payload: { product } })
  }

  function removeProduct(slug: string) {
    dispatch({ type: 'REMOVE_PRODUCT', payload: { slug } })
  }

  return (
    <ProductContext.Provider value={{ productsAmount: product.productsAmount, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  )
}