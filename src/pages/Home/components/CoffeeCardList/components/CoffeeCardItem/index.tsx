import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeeCardItemContainer } from "./styles";
import { Counter } from "../../../../../../components/Counter";
import { Coffee } from "../../../..";
import { formatPrice } from "../../../../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Coffee
}

export function CoffeeCardItem({ product }: Props) {
  const navigation = useNavigate()

  return (
    <CoffeeCardItemContainer>
      <div className="card-image">
        <img src={product.coffeeImage} alt="" />
      </div>
      <div className="tags">
        {product.tags.map(tag => (
          <div key={tag} className="card-tag">
            <span>{tag}</span>
          </div>
        ))}
      </div>
      <div className="card-content">
        <strong>{product.name}</strong>
        <p>{product.description}</p>
        <div className="card-buy">
          <span className="card-product-value">
            R$
            <span>{formatPrice(product.price)}</span>
          </span>
          <div className="card-actions">
            <Counter product={product} style={{ height: 38 }} />
            <button className="cart-button" type="button" onClick={() => navigation('/checkout')}>
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </CoffeeCardItemContainer>
  )
}