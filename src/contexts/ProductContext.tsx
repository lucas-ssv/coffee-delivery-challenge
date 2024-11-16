import { createContext, ReactNode, useMemo, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { getProductsOnStorage } from "../storage/productStorage";
import { Coffee } from "../pages/Home";

type ProductContextProps = {
  products: Product[]
  productsAmount: number
  addProduct: (product: Product) => void
  removeProduct: (slug: string) => void
  deleteProduct: (slug: string) => void
}

export const ProductContext = createContext({} as ProductContextProps)

type Props = {
  children: ReactNode
}

export type Product = Coffee & {
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

  function deleteProduct(slug: string) {
    dispatch({ type: 'DELETE_PRODUCT', payload: { slug } })
  }

  return (
    <ProductContext.Provider value={{ products: product.products, productsAmount: product.productsAmount, addProduct, removeProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  )
}