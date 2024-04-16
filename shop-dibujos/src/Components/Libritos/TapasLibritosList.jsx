import React from 'react';
import { libritos } from './data-libritos.js'
import { Libritos } from './Libritos.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { settings } from '../../cred/settings.js';


export const TapasLibritosList = () => {
    const modals = []; // Creamos un array para almacenar los modales

    return (
        <>
            <Slider {...settings}>
                {
                    libritos.map(libro => {
                        const [Librito, ModalComponent] = Libritos({ libro }); // Desestructuramos el array devuelto por Libritos
                        modals.push(ModalComponent); // Agregamos el modal al array de modals
                        return (
                            <React.Fragment key={libro.id}>
                                {Librito}
                            </React.Fragment>
                        );
                    })
                }
            </Slider>
            {modals}
        </>
    );
}
