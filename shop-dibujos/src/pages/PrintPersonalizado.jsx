import { PrintPickerForm } from "../Components/Prints/PrintPickerForm.jsx";
import { Menu } from '../Components/Menu/Menu.jsx'
import '../App.css'

export function PrintPersonalizado(){

    return(
        <>
            <Menu/>
            <h1 className="title">Lámina personalizada</h1>
            <h3>Completa el formulario con la info de tu print</h3>
            <PrintPickerForm/>
        </>
    )

}