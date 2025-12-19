import { Link, useParams } from "react-router-dom"
import { useGlobalProvider } from "../context/GlobalContext"
import { useState } from "react"
import TravellersList from "../component/TravellersList"


export default function DetailTravel() {


    const [search, setSearch] = useState("")
    const { id } = useParams()
    const { travel } = useGlobalProvider()


    const currentDestination = travel.find(el => (el.id == id))

    return (
        <>

            <div className="container mt-5 py-3 border_radius bg-light" >
                <h3 className="pb-4">{currentDestination.destinazione}, {currentDestination.dataPartenza}</h3>
                <div className="d-flex justify-content-between">
                    <input className=" search" type="search"
                        placeholder="Cerca..."
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                    <Link to={`/detail/${id}/addTraveler`} className="btn btn-primary btn_sm"><i className="bi bi-person-fill-add"></i></Link>

                </div>
                <TravellersList search={search} />
            </div >
        </>
    )
}