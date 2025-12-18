import { Link, useParams } from "react-router-dom"
import { useGlobalProvider } from "../context/GlobalContext"



export default function DetailTravel() {

    const { id } = useParams()
    const { travelers } = useGlobalProvider()

    const traveler = travelers.filter(el => el.viaggio_id == id)

    // console.log(traveler)





    return (
        <>
            {
                traveler.map(el => (
                    <div key={el.id} className="accordion mt-4" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
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
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className="row row-cols-5">
                                        <div className="col fw-bold">nome </div>
                                        <div className="col fw-bold">cognome</div>
                                        <div className="col fw-bold"> numero</div>
                                        <div className="col fw-bold">e-mail</div>
                                        <div className="col fw-bold">codice fiscale</div>
                                        <div className="col">{el.nome} </div>
                                        <div className="col">{el.cognome}</div>
                                        <div className="col"> {el.telefono}</div>
                                        <div className="col">{el.email}</div>
                                        <div className="col">{el.codiceFiscale}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ))
            }
        </>
    )
}