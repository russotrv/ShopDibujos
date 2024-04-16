import { Menu } from '../Components/Menu/Menu.jsx'
import { CartMiniature } from '../Components/Carrito/CartMiniature.jsx'
import { PrintsList } from '../Components/Prints/PrintsList.jsx'
import { Link } from '../Components/Link.jsx'
import '../Components/Product.css'

export function ShopPrints(){
    return (
        <>
            <h1 className='title'>Tienda de Prints</h1>
            <Menu/>
            <CartMiniature/>
            <main className="prints-container">
                <PrintsList />
            </main>
            <aside className='personalizado-container'>
                <p className='texto-descriptivo'>Láminas tamaño A4</p>
                <Link to={'/print-personalizado'} className='to-personalizado'>Pedí un print personalizado</Link>
            </aside>
        </>
    )
}