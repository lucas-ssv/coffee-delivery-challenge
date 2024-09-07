import { CreditCard, CurrencyDollar, MapPinLine, Trash } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { CheckoutContainer } from "./styles";
import americano from '../../assets/americano.svg'
import { Counter } from "../../components/Counter";

export function Checkout() {
  return (
    <CheckoutContainer>
      <Header />
      <section className="checkout">
        <div className="checkout-order">
          <h1>Complete seu pedido</h1>
          <div className="checkout-address">
            <div className="checkout-address-header">
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>

            <form>
              <div className="form-grid-inputs">
                <input type="text" className="postal-code" placeholder="CEP" />
                <input type="text" className="street" placeholder="Rua" />
                <input type="number" className="number" placeholder="Número" />
                <input type="text" className="complement" placeholder="Complemento" />
                <input type="text" className="neighborhood" placeholder="Bairro" />
                <input type="text" className="city" placeholder="Cidade" />
                <input type="text" className="uf" placeholder="UF" />
              </div>
            </form>
          </div>

          <div className="checkout-payment">
            <div className="checkout-payment-header">
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </div>
            <div className="checkout-payment-types">
              <button type="button" className="payment-type-button">
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </button>
              <button type="button" className="payment-type-button">
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </button>
              <button type="button" className="payment-type-button">
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </button>
            </div>
          </div>
        
        
        </div>
        <div className="checkout-items">
          <h1>Cafés selecionados</h1>
          <div className="coffee-card-container">
            <div className="coffee-card">
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
            </div>
            <hr />

            <div className="coffee-card-items-resume">
              <div>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ 29,70</p>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ 29,70</strong>
              </div>
            </div>

            <button type="button" className="coffee-card-confirm-order-button">Confirmar pedido</button>
          </div>
        </div>
      </section>
    </CheckoutContainer>
  )
}