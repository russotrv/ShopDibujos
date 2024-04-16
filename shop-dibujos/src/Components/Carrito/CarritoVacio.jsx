import { useCart } from '../../hooks/useCart.js'
import { Link } from '../Link.jsx'
export function CarritoVacio(){
    const {setIsPreference} = useCart()
    return (
        <>
            <section>
                <p><strong>Carrito vacío.</strong></p>
                <aside id='carrito-vacio-container'>
                    <Link id='carrito-vacio-button' to={'/'} onClick={()=> setIsPreference(false)} > Volver al Menú </Link>
                </aside>
            </section>
        </>
    )
}