import { useState } from "react"
import { useGlobalProvider } from "../context/GlobalContext"

export default function AddTravel() {

    const { travel, setTravel } = useGlobalProvider()


    const [addDestination, setAddDestination] = useState({
        id: travel.length + 1,
        destinazione: "",
        dataPartenza: "",
        dataRitorno: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;


        setAddDestination(prev => ({
            ...prev,
            [name]:
                name === "destinazione"
                    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                    : value
        }));
    }


    function handleSubmit(e) {
        e.preventDefault();
        // console.log(addDestination);
        setTravel([...travel, addDestination])

    }



    //è una pagina placeholder
    return (
        <>


            <section className="mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="container p-4 bg-light border_radius">
                        <h4 className="pb-4">Inserisci i dati del viaggio:</h4>
                        <div className="row">

                            <div className="mb-3 col-4">
                                <label htmlFor="destinazione" className="form-label fw-bold">Destinazione</label>
                                <input
                                    type="text"
                                    name="destinazione"
                                    id="destinazione"
                                    className="form-control"
                                    value={addDestination.destinazione}
                                    onChange={handleChange}

                                    placeholder="Inserisci la destinazione..."
                                />

                            </div>

                            <div className="mb-3 col-4">
                                <label htmlFor="dataPartenza" className="form-label fw-bold">Data partenza</label>
                                <input
                                    type="date"
                                    name="dataPartenza"
                                    id="dataPartenza"
                                    className="form-control"
                                    value={addDestination.dataPartenza}
                                    onChange={handleChange}

                                />

                            </div>

                            <div className="mb-3 col-4">
                                <label htmlFor="dataRitorno" className="form-label fw-bold">Data ritorno</label>
                                <input
                                    type="date"
                                    name="dataRitorno"
                                    id="dataRitorno"
                                    className="form-control"
                                    value={addDestination.dataRitorno}
                                    onChange={handleChange}

                                />

                            </div>
                            <div >
                                <button className="btn btn-primary" type="submit">
                                    Conferma
                                </button></div>

                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}