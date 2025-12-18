import { Link, useParams } from "react-router-dom"
import { useGlobalProvider } from "../context/GlobalContext"
import { useState } from "react"



export default function DetailTravel() {


    const [search, setSearch] = useState("")
    const { id } = useParams()
    const { travelers, travel } = useGlobalProvider()

    const traveler = travelers.filter(el => el.viaggio_id == id)

    // console.log(traveler)

    console.log(search)


    const filteredTraveler = traveler.filter(el =>
        (el.cognome + " " + el.nome)
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const currentDestination = travel.find(el => (el.id == id))


    console.log(currentDestination)

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
                    <Link to={`/detail/${id}/addTraveler`} className="btn btn-primary"><i class="bi bi-person-fill-add"></i></Link>

                </div>
                {
                    filteredTraveler.map(el => (
                        <div key={el.id} className="accordion mt-4" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#${el.id}`}
                                        aria-expanded="true"
                                        aria-controls={`${el.id}`}
                                    >
                                        {el.nome} {el.cognome}
                                    </button>
                                </h2>
                                <div
                                    id={`${el.id}`}
                                    className="accordion-collapse collapse "
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <div className="row row-cols-5">
                                            <div className="col fw-bold">Nome </div>
                                            <div className="col fw-bold">Cognome</div>
                                            <div className="col fw-bold">Numero</div>
                                            <div className="col fw-bold">Email</div>
                                            <div className="col fw-bold">Codice Fiscale</div>
                                            <div className="col">{el.nome} </div>
                                            <div className="col">{el.cognome}</div>
                                            <div className="col"><a className="text-decoration-none" href={`tel:${el.telefono}`}>{el.telefono}</a></div>
                                            <div className="col"><a className="text-decoration-none" href={`https://mail.google.com/mail/?view=cm&to=${el.email}`}>{el.email}</a></div>
                                            <div className="col">{el.codiceFiscale}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    ))
                }
            </div >
        </>
    )
}