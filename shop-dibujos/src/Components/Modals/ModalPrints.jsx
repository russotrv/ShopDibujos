// Modal.jsx
import './Modal.css'; // Estilos del modal
import PropTypes from 'prop-types';

export function ModalPrints({ isOpen, image, onClose}) {

    if (!isOpen) return null;

    return (
            <div className="modal-overlay" onClick={onClose} >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="carousel">
                        <img src={image} alt={`Image ${image}`} />
                    </div>
                    <button className="close-button" onClick={onClose}>Cerrar</button>
                </div>
            </div>
    )
}

ModalPrints.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};