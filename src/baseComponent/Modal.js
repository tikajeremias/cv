import { useContext } from "react";
import { Global } from "../context/GlobalContext";

export default function Modal({ children }) {

    const { modalState } = useContext(Global);

    return (
        <>
            {
                modalState.visible && 
                <div className='contenedor-principal-modal'>
                    <div className='contenedor-secundario-modal'>
                        {children}
                    </div>
                </div>

            }
        </>
    )
}