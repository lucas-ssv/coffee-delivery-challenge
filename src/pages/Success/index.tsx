import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Icon, SuccessContainer } from "./styles";
import successImage from '../../assets/success.svg'
import { useLocation } from "react-router-dom";

export function Success() {
  const location = useLocation()
  const { street, neighborhood, paymentType } = location.state

  return (
    <SuccessContainer>
      <h1 className="title">Uhu! Pedido confirmado</h1>
      <p className="subtitle">Agora é só aguardar que logo o café chegará até você</p>
      <div className="order-container">
        <div className="order-info-container">
          <div className="order-info">
            <Icon variant="purple">
              <MapPin color="white" weight="fill" />
            </Icon>
            <div className="order-description">
              <p>
                Entrega em <strong>{street}</strong>
              </p>
              <p>{neighborhood}</p>
            </div>
          </div>
          <div className="order-info">
            <Icon variant="yellow">
              <Timer color="white" weight="fill" />
            </Icon>
            <div className="order-description">
              <p>
                Previsão de entrega
              </p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className="order-info">
            <Icon variant="yellow-dark">
              <CurrencyDollar color="white" />
            </Icon>
            <div className="order-description">
              <p>
                Pagamento na entrega
              </p>
              <strong>{paymentType}</strong>
            </div>
          </div>
        </div>
        <img src={successImage} alt="uma pessoa sentada em uma moto de cor roxa simulando o processo de entrega" />
      </div>
    </SuccessContainer>
  )
}