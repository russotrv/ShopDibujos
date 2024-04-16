import { useState } from "react" 
import PropTypes from 'prop-types'; // Agregar esta línea de importación
import { ModalPrints } from "../Modals/ModalPrints.jsx";
import { ButtonAddCarrito } from "../Botones/ButtonAddCarrito.jsx";
import '../Product.css'

export function Prints({ print }){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        // Llamamos a la función proporcionada desde el componente padre
        setIsModalOpen(true)
    };

    const Print = (
            <section className="card" key={print.id}>
                <img className="tapa print" src={print.tapa} alt={`print ${print.id}: ${print.nombre}`} onClick={handleImageClick}/>
                <div className="data">
                    <p><strong>{print.nombre} |</strong>  ${print.precio} </p>
                </div>
                <ButtonAddCarrito product={print}/>
            </section>
    )
    
    const ModalComponent = (
        <ModalPrints isOpen={isModalOpen} image={print.tapa} onClose={() => setIsModalOpen(false)} key={print.id}/>
    )

    return [Print, ModalComponent]
}

Prints.propTypes = {
    print: PropTypes.shape({
        id: PropTypes.number.isRequired,
        tapa: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
    }).isRequired,
    onImageClick: PropTypes.func.isRequired
}