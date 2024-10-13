import { HomeContainer, Item, ItemsBanner } from "./styles";
import banner from '../../assets/banner.svg'
import expresso from '../../assets/expresso.svg'
import americano from '../../assets/americano.svg'
import cremoso from '../../assets/expresso-cremoso.svg'
import cafeGelado from '../../assets/cafe-gelado.svg'
import cafeComLeite from '../../assets/cafe-com-leite.svg'
import latte from '../../assets/latte.svg'
import capuccino from '../../assets/capuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mocaccino.svg'
import chocolateQuente from '../../assets/chocolate-quente.svg'
import cubano from '../../assets/cubano.svg'
import havaiano from '../../assets/havaiano.svg'
import arabe from '../../assets/arabe.svg'
import irlandes from '../../assets/irlandes.svg'

import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeCardList } from "./components/CoffeeCardList";

export interface Coffee {
  slug: string
  name: string
  description: string
  tags: string[]
  price: number
  coffeeImage: string
}

export function Home() {
  const coffeeList: Coffee[] = [{
    slug: 'expresso-tradicional',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.90,
    coffeeImage: expresso
  }, {
    slug: 'expresso-americano',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.90,
    coffeeImage: americano
  }, {
    slug: 'expresso-cremoso',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.90,
    coffeeImage: cremoso
  }, {
    slug: 'expresso-gelado',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.90,
    coffeeImage: cafeGelado
  }, {
    slug: 'cafe-com-leite',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.90,
    coffeeImage: cafeComLeite
  }, {
    slug: 'latte',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.90,
    coffeeImage: latte
  }, {
    slug: 'capuccino',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.90,
    coffeeImage: capuccino
  }, {
    slug: 'macchiato',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.90,
    coffeeImage: macchiato
  }, {
    slug: 'mocaccino',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.90,
    coffeeImage: mocaccino
  }, {
    slug: 'chocolate-quente',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.90,
    coffeeImage: chocolateQuente
  }, {
    slug: 'cubano',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'com leite'],
    price: 9.90,
    coffeeImage: cubano
  }, {
    slug: 'havaiano',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.90,
    coffeeImage: havaiano
  }, {
    slug: 'arabe',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.90,
    coffeeImage: arabe
  }, {
    slug: 'irlandes',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.90,
    coffeeImage: irlandes
  }]

  return (
    <HomeContainer>
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
        <CoffeeCardList products={coffeeList} />  
      </section>
    </HomeContainer>
  )
}