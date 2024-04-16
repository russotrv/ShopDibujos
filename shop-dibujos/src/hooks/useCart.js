import { useContext } from "react"; 
import { CartContext } from "../context/cart.jsx"; 

export const useCart = () => {
    const context = useContext(CartContext)    

    if( context === undefined){
        throw new Error ('useCart debe ser usado dentro de CartProvider')
    }

    return context
}