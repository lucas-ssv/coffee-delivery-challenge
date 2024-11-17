import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { CheckoutContainer } from "./styles";
import { PaymentTypes } from "../../components/PaymentTypes";
import { CoffeeCard } from "../../components/CoffeeCard";
import { FormEvent, useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { products, removeAllProducts } = useContext(ProductContext)
  const navigation = useNavigate()

  const [postalCode, setPostalCode] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [paymentType, setPaymentType] = useState('')

  const totalItemsPrice = products.reduce((acc, product) => acc + product.price * product.amount, 0)
  const orderPrice = 3.5
  const totalOrder = totalItemsPrice + orderPrice

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const customStreet = `${street}, ${number}`
    const customNeighborhood = `${neighborhood} - ${city}, ${uf}`
    navigation('/success', {
      state: {
        street: customStreet,
        neighborhood: customNeighborhood,
        paymentType
      }
    })

    removeAllProducts()
  }

  return (
    <CheckoutContainer>
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

            <form id="form-delivery" onSubmit={handleSubmit}>
              <div className="form-grid-inputs">
                <input type="text" className="postal-code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="CEP" />
                <input type="text" className="street" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Rua" />
                <input type="number" className="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Número" />
                <div className="complement">
                  <p>Opcional</p>
                  <input type="text" value={complement} onChange={(e) => setComplement(e.target.value)} placeholder="Complemento" />
                </div>
                <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} className="neighborhood" placeholder="Bairro" />
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="city" placeholder="Cidade" />
                <input type="text" value={uf} onChange={(e) => setUf(e.target.value)} className="uf" placeholder="UF" />
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
            <PaymentTypes paymentType={paymentType} onPaymentType={setPaymentType} />
          </div>
        </div>
        <div className="checkout-items">
          <h1>Cafés selecionados</h1>
          <div className="coffee-card-container">
            {products.map((product) => (
              <div key={product.slug}>
                <CoffeeCard product={product} />
                <hr />
              </div>
            ))}

            <div className="coffee-card-items-resume">
              <div>
                <p>Total de itens</p>
                <p>R$ {formatPrice(totalItemsPrice)}</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ {formatPrice(orderPrice)}</p>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ {formatPrice(totalOrder)}</strong>
              </div>
            </div>

            <button type="submit" form="form-delivery" className="coffee-card-confirm-order-button" disabled={!products.length}>Confirmar pedido</button>
          </div>
        </div>
      </section>
    </CheckoutContainer>
  )
}