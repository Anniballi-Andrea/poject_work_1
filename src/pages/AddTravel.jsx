import { useState } from "react"
import { useGlobalProvider } from "../context/GlobalContext"

export default function AddTravel() {

    const { setTravel } = useGlobalProvider()
    const [destinazione, setDestinazione] = useState('')
    const [dataPartenza, setDataPartenza] = useState('')
    const [dataRitorno, setDataRitorno] = useState('')

    const [addDestination, setAddDestination] = useState(
        {
            destinazione: destinazione,
            dataPartenza: dataPartenza,
            dataRitorno: dataRitorno
        }
    )

    /* function handleChange(e) {
         const { name, value } = e.target
         setAddDestination(prev => ({
             ...prev,
             [name]: value
         }))
     }*/


    function handleSubmit(e) {
        e.preventDefault()
        console.log(addDestination)
    }

    //è una pagina placeholder
    return (
        <>
            <h1>Aggiungere il form per i viaggi qui!!</h1>

            <section>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row">

                            <div className="mb-3 col-3">
                                <label htmlFor="destination" className="form-label">Destination</label>
                                <input
                                    type="text"
                                    name="destination"
                                    id="destination"
                                    className="form-control"
                                    value={destinazione}
                                    onChange={(e) => setDestinazione(e.target.value)}

                                    placeholder="Type a new destination..."
                                />
                                <small className="text-muted">Just the country name</small>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="departure" className="form-label">Departure</label>
                                <input
                                    type="date"
                                    name="departure"
                                    id="departure"
                                    className="form-control"
                                    value={dataPartenza}
                                    onChange={(e) => setDataPartenza(e.target.value)}

                                />
                                <small className="text-muted">Choose a date</small>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="return" className="form-label">Return</label>
                                <input
                                    type="date"
                                    name="return"
                                    id="return"
                                    className="form-control"
                                    value={dataRitorno}
                                    onChange={(e) => setDataRitorno(e.target.value)}

                                />
                                <small className="text-muted">Choose a date</small>
                            </div>

                            <div className="col-3 d-flex align-items-center">
                                <button className="btn btn-primary" type="submit">
                                    Submit form
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}