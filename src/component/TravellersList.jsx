import { useParams } from "react-router-dom"
import { useGlobalProvider } from "../context/GlobalContext"
import { useState } from "react"


export default function TravellersList({ search }) {
    const { id } = useParams()

    const [finalTravelers, setFinalTravelers] = useState()

    const { travelers, setTravelers } = useGlobalProvider()

    const traveler = travelers.filter(el => el.viaggio_id == id)


    const filteredTraveler = traveler.filter(el =>
        (el.cognome + " " + el.nome)
            .toLowerCase()
            .includes(search.toLowerCase())


    )


    function removeTraveler(id) {
        const newTravelers = travelers.filter((el) => el.id !== id)

        setTravelers(newTravelers)

    }


    return (


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
                            <div className="row  row-cols-1 row-cols-lg-4  text-center">

                                <div className="col text-center sm_margin">
                                    <div className="fw-bold">Numero</div>
                                    <div className=""><a className="text-decoration-none" href={`tel:${el.telefono}`}>{el.telefono}</a></div>
                                </div>
                                <div className="col text-center sm_margin sm_border">
                                    <div className="fw-bold">Email</div>
                                    <div><a className="text-decoration-none" href={`https://mail.google.com/mail/?view=cm&to=${el.email}`}>{el.email}</a></div>
                                </div>
                                <div className="col text-center sm_margin ">
                                    <div className="fw-bold">Codice Fiscale</div>
                                    <div>{el.codiceFiscale}</div>
                                </div>
                                <div className="col fw-bold btn_sm text-center">
                                    <div className="fw-bold">Elimina</div>
                                    <div className="col btn_sm"><button className="btn btn-sm btn-danger " onClick={() => removeTraveler(el.id)}><i className="bi bi-trash-fill"></i></button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        ))

    )
}