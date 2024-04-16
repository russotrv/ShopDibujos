import { CartItem } from './CartItem.jsx'
import { useCart } from '../../hooks/useCart.js'


export function CartList(){
    const { cart, addToCart, substractFromCart } = useCart()
    return (
        <ul className='cart-list'>
            { cart.map(product =>(
                    <CartItem
                        key={product.id}
                        addToCart={() => addToCart(product)}
                        substractFromCart={() => substractFromCart(product)}
                        {... product}
                    />
                ))
            }
        </ul>
    )
}
