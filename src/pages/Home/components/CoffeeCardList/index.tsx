import { Coffee } from '../..'
import { CoffeeCardItem } from './components/CoffeeCardItem'
import { CoffeeCardContainer } from './styles'

interface Props {
  products: Coffee[]
}

export function CoffeeCardList({ products }: Props) {
  return (
    <CoffeeCardContainer>
      {products.map(product => (
        <CoffeeCardItem key={product.slug} product={product} />
      ))}
    </CoffeeCardContainer>
  )
}