import { useCart } from '../../hooks/useCart.js'
// eslint-disable-next-line react/prop-types
export function CartItem({ tapa, nombre, precio, quantity, addToCart, substractFromCart}){
    const {isPreference} = useCart()
    return(
        <li>
            <img src={tapa} alt={nombre} />
            <div>
                <p><strong>{nombre}</strong> - ${precio}</p>
            </div>
            <footer>
                <small>
                    Qty: <strong>{quantity}</strong> 
                </small>
                {!isPreference &&
                    <>
                        <button onClick={addToCart}>+</button>
                        <button onClick={substractFromCart}>-</button>
                    </>
                }
            </footer>
        </li>
    )
}