import './Cart.css'
import { useId } from "react"
import { AddToCartIconBag, CartIcon, ClearCartIcon } from '../icons.jsx'
import { useCart } from '../../hooks/useCart.js'
import { Link } from '../Link.jsx'
import { CartList } from './CartList.jsx'

function BotonesCarrito(){
    const { cart, clearCart } = useCart()
    if(cart.length === 0){
        return <p>Carrito vacío</p>    
    }
    return (
        <>
            <aside className='cart-buttons-container'>
                <Link to={'/carrito'} id='button-ver-carrito' > Ver Carrito <CartIcon /> </Link>
                <button id='button-vaciar-carrito' onClick={clearCart}>
                        Vaciar carrito <ClearCartIcon />
                </button>
            </aside>

        </>
    )
}

export function CartMiniature(){
    const cartCheckboxId = useId()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <AddToCartIconBag />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden/>
        
            <section className="cart">
                    <>
                        <CartList/>
                        <BotonesCarrito/>
                    </>
            </section>
        </>
    )
}
