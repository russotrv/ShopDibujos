import emailjs from '@emailjs/browser';

export function sendEmail(mensaje){
    
    const userID = 'Glib8bUkBPGAj9Lyp'
    const serviceID = 'service_m46n6mx'
    const templateID = 'template_rioc0yw'

    // Definir los parámetros de la plantilla
    const templateParams = {
        message: mensaje,
        // Agrega cualquier otro parámetro necesario según la plantilla que estés utilizando
    };

    // Inicializar emailjs con tu User ID
    emailjs.init(userID);

    // Enviar el correo electrónico
    emailjs.send(serviceID, templateID, templateParams)
        .then((response) => {
            alert(`Información enviada con éxito!\nRecibirás un mail de confirmación.
Si querés mensajeame directo ---> Instragram: @juanitrovato`);
            console.log(response)
            window.location.href = '/';
        })
        .catch((error) => {
            alert('Error al enviar el correo electrónico.\nPor favor, intentalo de nuevo.');
            console.log(error)
            window.location.reload();
        });
}       
