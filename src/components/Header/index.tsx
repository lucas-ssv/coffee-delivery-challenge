import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
  const { productsAmount } = useContext(ProductContext)
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logoCoffeeDelivery} alt="" />
      </Link>
      <nav>
        <div className='location'>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <button type="button" onClick={() => navigate('checkout')}>
          <ShoppingCart size={22} weight="fill" />
          <div className='badge'>
            <span>{productsAmount}</span>
          </div>
        </button>
      </nav>
    </HeaderContainer>
  )
}