import { Product } from "../contexts/ProductContext";

type ProductState = {
  products: Product[]
  productsAmount: number
}

type ProductAction = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
  payload: any
}

export function productReducer(state: ProductState, action: ProductAction) {
  const { type, payload } = action

  if (type === 'ADD_PRODUCT') {
    const existingProductIndex = state.products.findIndex(
      (product) => product.slug === payload.product.slug
    );

    if (existingProductIndex !== -1) {
      const updatedProduct = {
        ...state.products[existingProductIndex],
        amount: state.products[existingProductIndex].amount + 1
      };

      const products = [
        ...state.products.slice(0, existingProductIndex),
        updatedProduct,
        ...state.products.slice(existingProductIndex + 1)
      ];

      return {
        products,
        productsAmount: state.productsAmount + 1
      };
    } else {
      const products = [...state.products, { ...payload.product, amount: 1 }];

      return {
        products,
        productsAmount: state.productsAmount + 1
      };
    }
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

      const products = [
        ...state.products.slice(0, existingProductIndex),
        updatedProduct,
        ...state.products.slice(existingProductIndex + 1)
      ];

      return {
        products,
        productsAmount: state.productsAmount - 1
      };
    }
  }

  throw Error('Unknown action.');
}