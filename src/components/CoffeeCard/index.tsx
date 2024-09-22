import { Trash } from "@phosphor-icons/react";
import americano from '../../assets/americano.svg'
import { Counter } from "../Counter";
import { CoffeeCardContainer } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={americano} alt="Pires e xícara com café" />
      <div className="coffee-card-details">
        <p>Expresso Tradicional</p>
        <div className="coffee-card-actions">
          <Counter style={{ height: 32 }} />
          <button type="button">
            <Trash size={16} />
            <span>Remover</span>
          </button>
        </div>
      </div>
      <strong>R$ 9,90</strong>
    </CoffeeCardContainer>
  )
}