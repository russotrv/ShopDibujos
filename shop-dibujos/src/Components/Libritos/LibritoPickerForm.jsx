import { useState } from 'react';
import { ChromePicker } from 'react-color';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../FormPicker.css'
import {sendEmail} from '../SendEmail/SendEmail.js'

export const LibritoPickerForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [drawing, setDrawing] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState();
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    const currentDate = new Date();

    // Calcular la fecha mínima permitida (diez dias en adelante)
    const minDate = new Date(currentDate);
    minDate.setDate(currentDate.getDate() + 10);

    const handleColorChange = (newColor) => {
        setBackgroundColor(newColor.hex);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mensaje = `
                        Nombre: ${name}
                        Email: ${email}
                        Temática: ${drawing}
                        Comentario: ${comment}
                        Color de tapa: ${backgroundColor}
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
                    <label htmlFor="drawing">Temática:</label>
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
                        placeholder='Detallame los 4 dibujos A6 para colorear'
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
                <label>Color de tapa:</label>
                <div className='color-picker-container'>
                    <ChromePicker 
                        color={backgroundColor} 
                        onChange={handleColorChange}
                    />
                </div>
            </div>
            
                <button type="submit">Enviar</button>
            </form>
        </div>
        );
}