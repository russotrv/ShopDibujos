import { useState, useEffect } from "react";
import { useCart } from '../../hooks/useCart.js'
import PropTypes from 'prop-types'; // Agregar esta línea de importación
import './ButtonStyle.css'

export const ButtonAddCarrito = ({ product }) => {
    const { addToCart, cart, removeFromCart } = useCart()
    const isBookInCart =  cart.some(item => item.id === product.id)
    const [isAdded, setIsAdded] = useState(isBookInCart)
    const [isHovered, setIsHovered] = useState(false);
    
    const text = isAdded
    ? (isHovered ? 'Quitar del carrito' : 'Agregado')
    : 'Agregar al carrito'

    const buttonClassName = isAdded
            ? 'button-carrito agregado'    
            : 'button-carrito'  

    useEffect(()=>{
        setIsAdded(isBookInCart);
    },[cart, isBookInCart])
    
    const handleClick = () =>{
        setIsAdded(!isAdded)
        isAdded 
            ? removeFromCart(product) 
            : addToCart(product)
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <button className={buttonClassName} 
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        {text}
            </button>
        </div>
    )
}

ButtonAddCarrito.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
}