import { createContext, useContext, useState } from "react";
import clienti from "../data/clienti"
import viaggi from "../data/viaggi"
const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const [travel, setTravel] = useState(viaggi)
    const [travelers, setTravelers] = useState(clienti)
    //console.log(travel)

    const value = {
        travel,
        setTravel,
        travelers,
        setTravelers

    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalProvider() {
    const context = useContext(GlobalContext)
    return (context)
}

export { GlobalProvider, useGlobalProvider }