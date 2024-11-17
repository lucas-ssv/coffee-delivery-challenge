import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { PaymentTypesContainer } from "./styles";

interface Props {
  paymentType: string
  onPaymentType: (paymentType: string) => void
}

export function PaymentTypes({ paymentType, onPaymentType }: Props) {
  return (
    <PaymentTypesContainer>
      <button type="button" className={`payment-type-button ${paymentType === 'Cartão de Crédito' ? 'actived' : ''}`} onClick={() => onPaymentType('Cartão de Crédito')}>
        <CreditCard size={16} />
        <span>Cartão de crédito</span>
      </button>
      <button type="button" className={`payment-type-button ${paymentType === 'Cartão de Débito' ? 'actived' : ''}`} onClick={() => onPaymentType('Cartão de Débito')}>
        <Bank size={16} />
        <span>Cartão de débito</span>
      </button>
      <button type="button" className={`payment-type-button ${paymentType === 'Dinheiro' ? 'actived' : ''}`} onClick={() => onPaymentType('Dinheiro')}>
        <Money size={16} />
        <span>Dinheiro</span>
      </button>
    </PaymentTypesContainer>
  )
}