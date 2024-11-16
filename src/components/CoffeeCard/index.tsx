import { Trash } from "@phosphor-icons/react";
import { Counter } from "../Counter";
import { CoffeeCardContainer } from "./styles";
import { formatPrice } from "../../utils/formatPrice";
import { Product, ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";

type Props = {
  product: Product
}

export function CoffeeCard({ product }: Props) {
  const { deleteProduct } = useContext(ProductContext)
  const totalProductPrice = product.price * product.amount

  return (
    <CoffeeCardContainer>
      <img src={product.coffeeImage} alt={product.description} />
      <div className="coffee-card-details">
        <p>{product.name}</p>
        <div className="coffee-card-actions">
          <Counter product={product} style={{ height: 32 }} />
          <button type="button" onClick={() => deleteProduct(product.slug)}>
            <Trash size={16} />
            <span>Remover</span>
          </button>
        </div>
      </div>
      <strong>R$ {formatPrice(totalProductPrice)}</strong>
    </CoffeeCardContainer>
  )
}