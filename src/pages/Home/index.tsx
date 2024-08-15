import { HomeContainer, Item, ItemsBanner } from "./styles";
import banner from '../../assets/banner.svg'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { CoffeeCardList } from "./components/CoffeeCardList";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <div className="intro">
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
        <CoffeeCardList />
      </section>
    </HomeContainer>
  )
}