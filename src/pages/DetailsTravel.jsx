import { useParams } from "react-router-dom"
import { useGlobalProvider } from "../context/GlobalContext"



export default function DetailTravel() {

    const { id } = useParams()
    const { travelers } = useGlobalProvider()

    const traveler = travelers.filter(el => el.viaggio_id == id)

    console.log(traveler)





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
                                    This is the first item's accordion body.
                                </div>
                            </div>
                        </div>

                    </div>

                ))
            }
        </>
    )
}