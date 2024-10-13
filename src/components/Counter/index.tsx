import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./styles";
import { HTMLAttributes, useContext, useState } from "react";
import { Coffee } from "../../pages/Home";
import { Product, ProductContext } from "../../contexts/ProductContext";

type Props = HTMLAttributes<HTMLElement> & {
  product: Coffee
}

export function Counter({ product, ...rest }: Props) {
  const { addProduct } = useContext(ProductContext)
  const [productAmount, setProductAmount] = useState<number>(0)

  function handleAddProduct(product: Coffee) {
    setProductAmount(productAmount => productAmount + 1)

    const newProduct: Product = {
      slug: product.slug,
      name: product.name,
      price: product.price,
      amount: 1
    }

    addProduct(newProduct)
  }

  return (
    <CounterContainer {...rest}>
      <button type="button">
        <Minus size={14} />
      </button>
      <span>{productAmount}</span>
      <button type="button" onClick={() => handleAddProduct(product)}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}