import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { PaymentTypesContainer } from "./styles";

export function PaymentTypes() {
  return (
    <PaymentTypesContainer>
      <button type="button" className="payment-type-button">
        <CreditCard size={16} />
        <span>Cartão de crédito</span>
      </button>
      <button type="button" className="payment-type-button">
        <Bank size={16} />
        <span>Cartão de débito</span>
      </button>
      <button type="button" className="payment-type-button">
        <Money size={16} />
        <span>Dinheiro</span>
      </button>
    </PaymentTypesContainer>
  )
}