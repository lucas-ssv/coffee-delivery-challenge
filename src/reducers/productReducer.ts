import { Product } from "../contexts/ProductContext";
import { addProductsOnStorage, removeAllProductOnStorage, removeProductOnStorage } from "../storage/productStorage";

type ProductState = {
  products: Product[]
  productsAmount: number
}

type ProductAction = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT' | 'DELETE_PRODUCT' | 'REMOVE_ALL_PRODUCTS'
  payload?: any
}

export function productReducer(state: ProductState, action: ProductAction) {
  const { type, payload } = action

  if (type === 'ADD_PRODUCT') {
    let products: Product[]

    const existingProductIndex = state.products.findIndex(
      (product) => product.slug === payload.product.slug
    );

    if (existingProductIndex !== -1) {
      const updatedProduct = {
        ...state.products[existingProductIndex],
        amount: state.products[existingProductIndex].amount + 1
      };

      products = [
        ...state.products.slice(0, existingProductIndex),
        updatedProduct,
        ...state.products.slice(existingProductIndex + 1)
      ];
    } else {
      products = [...state.products, { ...payload.product, amount: 1 }];
    }

    addProductsOnStorage(products)

    return {
      products,
      productsAmount: state.productsAmount + 1
    };
  }

  if (type === 'REMOVE_PRODUCT') {
    const existingProductIndex = state.products.findIndex(
      (product) => product.slug === payload.slug
    );

    if (existingProductIndex !== -1) {
      const updatedProduct = {
        ...state.products[existingProductIndex],
        amount: state.products[existingProductIndex].amount - 1
      };

      let products: Product[]

      if (updatedProduct.amount > 0) {
        products = [
          ...state.products.slice(0, existingProductIndex),
          updatedProduct,
          ...state.products.slice(existingProductIndex + 1)
        ];
      } else {
        products = [
          ...state.products.slice(0, existingProductIndex),
          ...state.products.slice(existingProductIndex + 1)
        ];
      }

      removeProductOnStorage(payload.slug)

      return {
        products,
        productsAmount: state.productsAmount - 1
      };
    }
  }

  if (type === 'DELETE_PRODUCT') {
    const products = state.products
    let productsAmount = state.productsAmount
    const productIndex = products.findIndex((product) => product.slug === payload.slug)

    if (productIndex >= 0) {
      const productAmount = products[productIndex].amount
      productsAmount -= productAmount
      products.splice(productIndex, 1)

      removeAllProductOnStorage(payload.slug)
    }
    return {
      products,
      productsAmount
    }
  }

  if (type === 'REMOVE_ALL_PRODUCTS') {
    return {
      products: [],
      productsAmount: 0
    }
  }
  
  throw Error('Unknown action.');
}