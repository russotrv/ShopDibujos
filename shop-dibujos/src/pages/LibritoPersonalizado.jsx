import { Menu } from "../Components/Menu/Menu"
import '../App.css'
import { LibritoPickerForm } from "../Components/Libritos/LibritoPickerForm"

export function LibritoPersonalizado(){
    return(
        <>
            <Menu/>
            <h1 className="title">Librito personalizado</h1>
            <h3>Completa el formulario con la info de tu librito para colorear</h3>
            <LibritoPickerForm/>
        </>
    )
}