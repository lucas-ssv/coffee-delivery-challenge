import { HomeContainer, Item, ItemsBanner } from "./styles";
import logoCoffeeDelivery from '../../assets/logo.svg'
import banner from '../../assets/banner.svg'
import capuccino from '../../assets/capuccino.svg'
import { Coffee, MapPin, Minus, Package, Plus, ShoppingCart, ShoppingCartSimple, Timer } from "@phosphor-icons/react";

export function Home() {
  return (
    <HomeContainer>
      <header>
        <img src={logoCoffeeDelivery} alt="" />
        <nav>
          <div>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </div>
          <button type="button">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </nav>
      </header>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <ItemsBanner>
            <Item variant="yellow-dark">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item variant="yellow">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item variant="base-text">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item variant="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </ItemsBanner>
        </div>
        <div>
          <img src={banner} alt="copo de café com grãos de café ao redor do copo" />
        </div>
      </div>
      <section>
        <h1>Nossos cafés</h1>
        <ul>
          <li>
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
          </li>
        </ul>
      </section>
    </HomeContainer>
  )
}