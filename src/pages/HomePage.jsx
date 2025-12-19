import { useState } from "react"


import { Link } from "react-router-dom"
import { useGlobalProvider } from "../context/GlobalContext"
import TravelsTable from "../component/TravelsTable"

export default function HomePage() {
    const { travel, setTravel } = useGlobalProvider()


    function removeTravel(id) {
        const filteredTravel = travel.filter((el) => el.id !== id)

        setTravel(filteredTravel)

    }





    //const [travel, setTravel] = useState(viaggi) //inserisco nello state di travel la lista di viaggi importata

    //console.log(travel)
    return (
        <>
            <div className="container mt-5 bg-light p-3">
                <h3 className="pb-4">Lista dei prossimi viaggi:</h3>
                <TravelsTable />
            </div>
        </>
    )
}