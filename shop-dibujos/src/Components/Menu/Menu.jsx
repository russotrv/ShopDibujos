import { useState } from 'react';
import './Menu.css'; // Estilos del menú
import { Link } from '../Link.jsx'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  // Función para alternar entre abrir y cerrar el menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu">
            <button className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>☰</button>
            <div className={`menu-options ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to={'/'}>Home </Link></li>
                    <li><Link to={'/shop-libritos'}>Libritos </Link></li>
                    <li><Link to={'/shop-prints'}>Prints </Link></li>
                    <li><Link to={'/carrito'}>Carrito </Link></li>
                </ul>
            </div>
        </div>
    );
}