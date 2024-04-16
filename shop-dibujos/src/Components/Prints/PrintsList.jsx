import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { settings } from '../../cred/settings.js';
import { prints } from './data-prints.js' 
import { Prints } from "./Prints.jsx"

export const PrintsList = () => {

    const modals = []

    return (
        <>
            <Slider {...settings}>
                {
                    prints.map(print =>{
                        const [Print, ModalComponent] = Prints({ print })
                        modals.push(ModalComponent)
                        return(
                            <React.Fragment key={print.id}>
                                {Print}
                            </React.Fragment>
                        )
                    })
                }
            </Slider>
            {modals}
        </>
    )
}