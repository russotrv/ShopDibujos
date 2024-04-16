import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import { PUBLIC_KEY } from '../../cred/cred.js'
import { useState} from 'react'
import { useCart } from '../../hooks/useCart.js'

export function DetalleCarrito(){
    const {cart, clearCart, setIsPreference} = useCart()
    const [preferenceId, setPreferenceId] = useState(false)

    const quantity = cart.reduce((acc, item) => acc + item.quantity,0)
    const productsJoin = cart.map(item => item.nombre).join(', ');
    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    const products =  '[' + quantity + '] ' + productsJoin
    
    initMercadoPago(PUBLIC_KEY, {
        locale: "es-AR",
    });

    const createPreference = async() => {
        try{
            const response = await axios.post("http://localhost:3000/create_preference", 
                {
                    title: products,
                    quantity: 1,
                    price: parseInt(total),
                }
            );

            const {id} = response.data
            setPreferenceId(id)
            setIsPreference(true)
        } catch(error){
            console.log(error)
        }
    };

    const handleBuy = async () => {
        console.log("Llamando a preferencia ...")
        createPreference()
    };

    const handleWalletClick = () =>{
        console.log("Se clickeo en el pago por mp")
        clearCart()
    }

    return (
        <>
            <section id='detalle-carrito'>
                <p id='total-carrito'>Total : <strong>${total}</strong></p>
                <aside id='botones-carrito'>
                    <button id='boton-pagar' onClick={handleBuy}>Comprar</button>
                    <button id='boton-vaciar-carrito' onClick={clearCart}>Vaciar Carrito</button>
                </aside>
                <div id='wallet-container' onClick={handleWalletClick}>
                    {preferenceId && <Wallet
                        initialization={{ preferenceId: preferenceId }} 
                        />
                    }
                </div>
            </section>
        </>
    )
}