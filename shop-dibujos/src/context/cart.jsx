import { createContext, useReducer, useState} from "react"; 
import { cartReducer, cartInitialState } from '../reducer/cart.js'
//1. Crear contecto
export const CartContext = createContext()

function useCartReducer(){
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)
    const [isPreference, setIsPreference] = useState(false)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    });

    const substractFromCart = product => dispatch({
        type: 'SUBSTRACT_FROM_CART',
        payload: product
    })

    const removeFromCart = product => dispatch ({
        type: 'REMOVE_FROM_CART',
        payload: product
    });

    const clearCart = () => dispatch({ type: 'CLEAR_CART' });

    return {state, addToCart, substractFromCart, removeFromCart, clearCart, isPreference, setIsPreference}
}

//2. Crear provider
// eslint-disable-next-line react/prop-types
export function CartProvider ({ children }){
    const {state, addToCart, substractFromCart, removeFromCart, clearCart, isPreference, setIsPreference} = useCartReducer()

    return (
        <CartContext.Provider value = {{
            cart: state,
            addToCart,
            substractFromCart,
            removeFromCart,
            clearCart,
            isPreference,
            setIsPreference
        }}
        >
            {children}
        </CartContext.Provider>
    )
}