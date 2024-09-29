import { Coffee } from '../..'
import { CoffeeCardItem } from './components/CoffeeCardItem'
import { CoffeeCardContainer } from './styles'

interface Props {
  items: Coffee[]
}

export function CoffeeCardList({ items }: Props) {
  return (
    <CoffeeCardContainer>
      {items.map(item => (
        <CoffeeCardItem key={item.slug} item={item} />
      ))}
    </CoffeeCardContainer>
  )
}