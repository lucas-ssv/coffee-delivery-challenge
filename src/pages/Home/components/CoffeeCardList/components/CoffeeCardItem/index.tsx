import { ShoppingCartSimple } from "@phosphor-icons/react";
import capuccino from '../../../../../../assets/capuccino.svg'
import { CoffeeCardItemContainer } from "./styles";
import { Counter } from "../../../../../../components/Counter";

export function CoffeeCardItem() {
  return (
    <CoffeeCardItemContainer>
      <div className="card-image">
        <img src={capuccino} alt="" />
      </div>
      <div className="card-tag">
        <span>Tradicional</span>
      </div>
      <div className="card-content">
        <strong>Expresso Tradicional</strong>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <div className="card-buy">
          <span className="card-product-value">
            R$
            <span>9,90</span>
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