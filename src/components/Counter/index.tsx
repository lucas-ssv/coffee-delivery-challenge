import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./styles";
import { HTMLAttributes, useContext, useState } from "react";
import { Coffee } from "../../pages/Home";
import { Product, ProductContext } from "../../contexts/ProductContext";

type Props = HTMLAttributes<HTMLElement> & {
  product: Coffee
}

export function Counter({ product, ...rest }: Props) {
  const { products, addProduct, removeProduct } = useContext(ProductContext)
  const productAmountStorage = products?.find((p) => p.slug === product.slug)?.amount

  const [productAmount, setProductAmount] = useState<number>(productAmountStorage || 0)

  function handleAddProduct(product: Coffee) {
    setProductAmount(productAmount => productAmount + 1)

    const newProduct: Product = {
      slug: product.slug,
      name: product.name,
      description: product.description,
      tags: product.tags,
      price: product.price,
      coffeeImage: product.coffeeImage,
      amount: 1,
    }

    addProduct(newProduct)
  }

  function handleRemoveProduct(slug: string) {
    if (productAmount > 0) {
      setProductAmount(productAmount => productAmount - 1)
      removeProduct(slug)
    }
  }

  return (
    <CounterContainer {...rest}>
      <button type="button" onClick={() => handleRemoveProduct(product.slug)}>
        <Minus size={14} />
      </button>
      <span>{productAmount}</span>
      <button type="button" onClick={() => handleAddProduct(product)}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}