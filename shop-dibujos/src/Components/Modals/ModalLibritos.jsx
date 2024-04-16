// Modal.jsx
import './Modal.css'; // Estilos del modal
import PropTypes from 'prop-types';
import { useState } from 'react'

export function ModalLibritos({ title, isOpen, images, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const titulo = title

    if (!isOpen) return null;
    
    return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h4 className='titulo-modal-libritos'>{titulo}</h4>
                    <button className="carousel-arrow left-arrow" onClick={goToPreviousImage}>
                        &lt;
                    </button>
                    <div className="carousel">
                        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
                    </div>
                    <button className="carousel-arrow right-arrow" onClick={goToNextImage}>
                        &gt;
                    </button>
                    <button className="close-button" onClick={onClose}>Cerrar</button>
                </div>
            </div>    
    )
}

ModalLibritos.propTypes = {
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func.isRequired
};