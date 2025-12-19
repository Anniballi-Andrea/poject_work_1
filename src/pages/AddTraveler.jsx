import { useEffect, useState } from "react";
import { useGlobalProvider } from "../context/GlobalContext";
import { Link, useParams } from "react-router-dom";

export default function AddTraveler() {
    const { travelers, setTravelers } = useGlobalProvider()
    const { id } = useParams()

    const [alert, setAlert] = useState(false)

    // State oggetto per i valori del form
    const [addTraveler, setAddTraveler] = useState({
        id: travelers.length + 1,
        viaggio_id: id,
        nome: "",
        cognome: "",
        codiceFiscale: "",
        telefono: "",
        email: ""

    });

    // Funzione generica per aggiornare i campi del form
    function handleChange(e) {
        const { name, value } = e.target;
        setAddTraveler(prev => ({
            ...prev,
            [name]:
                name === "nome" || name === "cognome"
                    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                    : value

        }));

        setAlert(false)
    }

    // Submit del form
    function handleSubmit(e) {
        e.preventDefault();

        setTravelers([...travelers, addTraveler])

        // Reset del form
        setAddTraveler({
            id: travelers.length + 1,
            viaggio_id: id,
            nome: "",
            cognome: "",
            codiceFiscale: "",
            telefono: "",
            email: ""
        })

        setAlert(true)

    }

    // useEffect(() => console.log(travelers), [travelers])

    return (
        <>
            {
                alert && <div class="alert alert-success" role="alert">
                    viaggiatore aggiunto con successo!
                </div>
            }
            <div className="container my-4 pb-3 bg-light">
                <h4 className=" pt-3 pb-4">Aggiungi i dati del viaggiatore:</h4>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            value={addTraveler.nome}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Inserisci nome..."
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Cognome:</label>
                        <input
                            type="text"
                            name="cognome"
                            value={addTraveler.cognome}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Inserisci cognome..."
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Codice Fiscale:</label>
                        <input
                            type="text"
                            name="codiceFiscale"
                            value={addTraveler.codiceFiscale}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Inserisci Codice Fiscale..."
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Telefono:</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={addTraveler.telefono}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Inserisci numero di telefono..."
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={addTraveler.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Inserisci email..."
                            required
                        />
                    </div>


                    <div className="d-flex align-items-end justify-content-between">
                        <button type="submit" className="btn btn-primary">
                            Aggiungi Viaggiatore
                        </button>

                        <Link to={`/detail/${id}`} className="btn btn-warning mt-3"><i className="bi bi-arrow-left-square"></i></Link>
                    </div >


                </form >

            </div >

        </>
    );
}
