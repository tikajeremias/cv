import { useState, createContext } from "react";

export const Global = createContext()

export function GlobalProvider({ children }) {

    const [modalState, setModalState] = useState({
        visible:false
    });

    return (
        <Global.Provider value={{ modalState, setModalState}}>
            {children}
        </Global.Provider>
    );
}