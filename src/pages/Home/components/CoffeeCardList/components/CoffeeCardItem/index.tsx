import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeeCardItemContainer } from "./styles";
import { Counter } from "../../../../../../components/Counter";
import { Coffee } from "../../../..";

interface Props {
  item: Coffee
}

export function CoffeeCardItem({ item }: Props) {
  const formatPrice = (price: number) => new Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)

  return (
    <CoffeeCardItemContainer>
      <div className="card-image">
        <img src={item.coffeeImage} alt="" />
      </div>
      <div className="tags">
        {item.tags.map(tag => (
          <div key={tag} className="card-tag">
            <span>{tag}</span>
          </div>
        ))}
      </div>
      <div className="card-content">
        <strong>{item.name}</strong>
        <p>{item.description}</p>
        <div className="card-buy">
          <span className="card-product-value">
            R$
            <span>{formatPrice(item.price)}</span>
          </span>
          <div className="card-actions">
            <Counter style={{ height: 38 }} />
            <button className="cart-button" type="button">
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </CoffeeCardItemContainer>
  )
}