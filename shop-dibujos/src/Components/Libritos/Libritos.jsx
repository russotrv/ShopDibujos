import { useState } from "react" 
import PropTypes from 'prop-types'; // Agregar esta línea de importación
import { ModalLibritos } from '../Modals/ModalLibritos.jsx'
import { ButtonAddCarrito } from "../Botones/ButtonAddCarrito.jsx";
import '../Product.css'

export function Libritos({libro}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);

    const handleTapasClick = (images) => {
        setModalImages(images);
        setIsModalOpen(true);
    };

    const Librito = (
        <section className="card" key={libro.id}>
            <img className="tapa tapa-librito" src={libro.tapa} alt={`tapa librito ${libro.id}: {librito.nombre}`} onClick={() => handleTapasClick(libro.dibujos)} />
            <div className="data">
                <p><strong>{libro.nombre} |</strong>  ${libro.precio} </p>
            </div>
            <ButtonAddCarrito product={libro}/>
        </section>
    );
    const ModalComponent = (
        <ModalLibritos title={libro.nombre} isOpen={isModalOpen} images={modalImages} onClose={() => setIsModalOpen(false)} key={libro.id} />
    );

    return [Librito, ModalComponent]; // Devolvemos un array de dos elementos
}

Libritos.propTypes = {
    libro: PropTypes.shape({
        id: PropTypes.number.isRequired,
        tapa: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        precio: PropTypes.string.isRequired,
        dibujos: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
}