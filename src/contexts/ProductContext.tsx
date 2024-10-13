import { createContext, ReactNode, useMemo, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { getProductsOnStorage } from "../storage/productStorage";

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
  const productStorage = useMemo(() => {
    const products = getProductsOnStorage()
    const productsAmount = products.reduce((acc, product) => acc + product.amount, 0)
    return {
      products,
      productsAmount
    }
  }, [])
  const [product, dispatch] = useReducer(productReducer, {
    products: productStorage.products || [] as Product[],
    productsAmount: productStorage.productsAmount || 0
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