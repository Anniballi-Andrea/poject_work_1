import { useState } from "react"
import { useGlobalProvider } from "../context/GlobalContext"

export default function AddTravel() {

    const { travel, setTravel } = useGlobalProvider()
    const [destinazione, setDestinazione] = useState('')
    const [dataPartenza, setDataPartenza] = useState('')
    const [dataRitorno, setDataRitorno] = useState('')

    const [addDestination, setAddDestination] = useState({

        destinazione: "",
        dataPartenza: "",
        dataRitorno: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setAddDestination(prev => ({
            ...prev,
            [name]: value
        }));
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log(addDestination);
        setTravel([...travel, addDestination])
        console.log(travel)
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
                                <label htmlFor="destinazione" className="form-label">Destination</label>
                                <input
                                    type="text"
                                    name="destinazione"
                                    id="destinazione"
                                    className="form-control"
                                    value={addDestination.destinazione}
                                    onChange={handleChange}

                                    placeholder="Type a new destination..."
                                />
                                <small className="text-muted">Just the country name</small>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="dataPartenza" className="form-label">Departure</label>
                                <input
                                    type="date"
                                    name="dataPartenza"
                                    id="dataPartenza"
                                    className="form-control"
                                    value={addDestination.dataPartenza}
                                    onChange={handleChange}

                                />
                                <small className="text-muted">Choose a date</small>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="dataRitorno" className="form-label">Return</label>
                                <input
                                    type="date"
                                    name="dataRitorno"
                                    id="dataRitorno"
                                    className="form-control"
                                    value={addDestination.dataRitorno}
                                    onChange={handleChange}

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