import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import capuccino from '../../../../../../assets/capuccino.svg'
import { CoffeeCardItemContainer } from "./styles";

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
            <div className="card-counter">
              <button type="button">
                <Minus size={14} />
              </button>
              <span>1</span>
              <button type="button">
                <Plus size={14} />
              </button>
            </div>
            <button type="button">
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </CoffeeCardItemContainer>
  )
}