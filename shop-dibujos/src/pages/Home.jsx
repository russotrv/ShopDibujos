import { useEffect, useState } from "react";
import { Link } from "../Components/Link.jsx";
import '../App.css'
import { imagesLibritos } from "../Components/Libritos/data-libritos.js";
import { imagesPrints } from "../Components/Prints/data-prints.js";

export function Home(){
    const [currentLibritoIndex, setCurrentLibritoIndex] = useState(0);
    const [currentPrintIndex, setCurrentPrintIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLibritoIndex((prevIndex) => (prevIndex + 1) % imagesLibritos.length);
        }, 6000); // Cambia de imagen cada 10 segundos

        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagesLibritos]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPrintIndex((prevIndex) => (prevIndex + 1) % imagesPrints.length)
        },5000);
        
        return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagesPrints])

    return(
        <>
            <h1 className="title">Tienda de dibujos</h1>
            <main className="home-button-container">
                <div>
                <div className="preview-container">
                        {imagesLibritos.map((image, index) => (
                            <img key={index} src={image} alt={`Imagen ${index}`} style={{ display: index === currentLibritoIndex ? 'block' : 'none' }} />
                        ))}
                </div>
                <Link className='home-button' to={'/shop-libritos'}>Libritos</Link>
                </div>
                <div>
                    <div className="preview-container">
                        {imagesPrints.map((image,index) => (
                            <img key={index} src={image} alt={`Imagen ${index}`} style={{ display: index === currentPrintIndex ? 'block' : 'none' }} />
                        ))}
                    </div>
                    <Link className='home-button' to={'/shop-prints'}>Láminas</Link>
                </div>
            </main>
        </>
    )
}