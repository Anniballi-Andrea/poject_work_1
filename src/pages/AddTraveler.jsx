import { useEffect, useState } from "react";
import { useGlobalProvider } from "../context/GlobalContext";
import { Link, useParams } from "react-router-dom";

export default function AddTraveler() {
    const { travelers, setTravelers } = useGlobalProvider()
    const { id } = useParams()


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
        });
    }

    useEffect(() => console.log(travelers), [travelers])

    return (
        <>
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
                        />
                    </div>


                    <button type="submit" className="btn btn-primary">
                        Aggiungi Viaggiatore
                    </button>


                </form>

            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Link to={`/detail/${id}`} className="btn btn-warning mt-3"><i class="bi bi-arrow-left-square"></i></Link>

            </div>
        </>
    );
}
