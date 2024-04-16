import { useState } from 'react';
import { ChromePicker } from 'react-color';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../FormPicker.css'
import {sendEmail} from '../SendEmail/SendEmail.js'

// eslint-disable-next-line react/prop-types
export const PrintPickerForm = () => {
    const [drawing, setDrawing] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [date, setDate] = useState();
    const [backgroundColorType, setBackgroundColorType] = useState('solid')
    const [backgroundGradientStartColor, setBackgroundGradientStartColor] = useState('#ffffff');
    const [backgroundGradientEndColor, setBackgroundGradientEndColor] = useState('#ffffff');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    const handleColorChange = (newColor) => {
        setBackgroundColor(newColor.hex);
    };

    const handleGradientStartColorChange = (newColor) => {
        setBackgroundGradientStartColor(newColor.hex);
    };

    const handleGradientEndColorChange = (newColor) => {
        setBackgroundGradientEndColor(newColor.hex);
    };

    // Obtener la fecha actual
    const currentDate = new Date();

    // Calcular la fecha mínima permitida (una semana en adelante)
    const minDate = new Date(currentDate);
    minDate.setDate(currentDate.getDate() + 7);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const background = backgroundColorType === 'solid' ? backgroundColor : backgroundGradientStartColor + ' ' + backgroundGradientEndColor 
        const mensaje = `
                        Nombre: ${name}
                        Email: ${email}
                        Dibujo/Personaje: ${drawing}
                        Tipo de Fondo: ${backgroundColorType}
                        Color de Fondo: ${background}
                        Comentario: ${comment}
                        Fecha Estimada: ${date}
                        ` 

        console.log("Elementos del mensaje:\n", name, "\n", email, "\n", mensaje)
        
        sendEmail(mensaje)
    };       
    
    return (
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="drawing">Dibujo/Personaje:</label>
                        <input
                            type="text"
                            id="drawing"
                            value={drawing}
                            onChange={(e) => setDrawing(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Comentarios:</label>
                        <input
                            type="text"
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Fecha Estimada:</label>
                        <DatePicker 
                            selected={date} 
                            onChange={(newDate) => setDate(newDate)}
                            minDate={minDate}
                        />
                    </div>
                    <div>
                    <label>Tipo de Fondo:</label>
                    <select value={backgroundColorType} onChange={(e) => setBackgroundColorType(e.target.value)} required>
                        <option value="solid">Color Plano</option>
                        <option value="gradient">Degradado</option>
                    </select>
                </div>
                {backgroundColorType === 'solid' && (
                    <div>
                        <label>Color de Fondo:</label>
                        <div className='color-picker-container'>
                            <ChromePicker 
                                color={backgroundColor} 
                                onChange={handleColorChange}
                            />
                        </div>
                    </div>
                )}
                {backgroundColorType === 'gradient' && (
                    <div>
                        <label>Inicio del Degradado:</label>
                        <div className='color-picker-container'>
                            <ChromePicker 
                                color={backgroundGradientStartColor} 
                                onChange={handleGradientStartColorChange}
                            />
                        </div>
                        <label>Fin del Degradado:</label>
                        <div className='color-picker-container'>
                            <ChromePicker 
                                color={backgroundGradientEndColor} 
                                onChange={handleGradientEndColorChange}
                            />
                        </div>
                    </div>
                )}
                    <button type="submit">Enviar</button>
                </form>
            </div>
            );
};

