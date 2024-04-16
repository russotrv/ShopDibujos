import { CartMiniature } from '../Components/Carrito/CartMiniature.jsx'
import { TapasLibritosList } from '../Components/Libritos/TapasLibritosList.jsx'
import { libritos } from '../Components/Libritos/data-libritos.js'
import { Menu } from '../Components/Menu/Menu.jsx'
import { Link } from '../Components/Link.jsx'
import '../index.css'
import '../App.css'

export function ShopLibritos(){
    return (
        <>
            <h1 className='title'>Tienda de Libritos </h1>
            <Menu/>
            <CartMiniature/>
            <main className="libritos-container">
                <TapasLibritosList libritos={libritos}/>
            </main>
            <aside className='personalizado-container'>
                <p className='texto-descriptivo'>Cada librito trae 4 dibujos tamaño A6 para colorear</p>
                <Link to={'/librito-personalizado'} className='to-personalizado'>Pedí un librito personalizado</Link>
            </aside>
        </>
    )
}