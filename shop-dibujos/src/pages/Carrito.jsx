import { useState, useEffect } from 'react'
import { useCart } from '../hooks/useCart.js'
import { CartList } from '../Components/Carrito/CartList.jsx'
import { Menu } from '../Components/Menu/Menu.jsx'
import { CarritoVacio } from '../Components/Carrito/CarritoVacio.jsx'
import { DetalleCarrito } from '../Components/Carrito/DetalleCarrito.jsx'
import '../Components/Carrito/Carrito.css'
import '../App.css'


export function Carrito(){
    const [carritoVacio, setCarritoVacio] = useState(true);
    const { cart, setIsPreference } = useCart();

    useEffect(() => {
        // Verifica si el carrito está vacío
        setCarritoVacio(cart.length === 0);
    }, [cart]);

    useEffect(()=>{
        if(cart.length !== 0)
            setIsPreference(false)
    }, [cart, setIsPreference])

    const claseCarrito = carritoVacio ? 'main-carrito-vacio' : 'main-carrito'
    
    return (
        <>
            <h1 className='title'>Carrito</h1>
            <Menu/>
            <main className={claseCarrito}>
                <section className='carrito'>
                    <CartList />
                </section>
                {carritoVacio ? 
                    <CarritoVacio /> : <DetalleCarrito /> }
            </main>
        </>
    )
}

/*
    Mastercard
        5031 7557 3453 0604
        123
        11/25

    Visa
        4509 9535 6623 3704
        123
        11/25

    American Express
        3711 803032 57522
        1234
        11/25
*/