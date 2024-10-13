import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

export function Header() {
  const { productsAmount } = useContext(ProductContext)

  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <div className='location'>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <button type="button">
          <ShoppingCart size={22} weight="fill" />
          <div className='badge'>
            <span>{productsAmount}</span>
          </div>
        </button>
      </nav>
    </HeaderContainer>
  )
}