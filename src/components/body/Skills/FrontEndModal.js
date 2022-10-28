import { useContext } from "react";
import { Global } from "../../../context/GlobalContext";

export default function FrontEndModal() {

    const { setModalState } = useContext(Global);

    return (
        <div className='frontend-more-container'>
            AAAAAAAA
            <button onClick={() => setModalState({ visible: false, type: 'new-modal' })}></button>
        </div>
    )
}