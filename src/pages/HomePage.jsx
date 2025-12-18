import { useState } from "react"
import clienti from "../data/clienti" //prendo la lista clienti dal file clienti.jsx
import viaggi from "../data/viaggi" //prendo la lista dei viaggi nel file viaggi.jsx
import { Link } from "react-router-dom"
import { useGlobalProvider } from "../context/GlobalContext"

export default function HomePage() {
    const viaggiatori = clienti
    const { travel, setTravel } = useGlobalProvider()
    //const [travel, setTravel] = useState(viaggi) //inserisco nello state di travel la lista di viaggi importata

    //console.log(travel)
    return (
        <>
            <h1>Aggiungere la lista dei viaggi qui!!</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Destinazione</th>
                        <th scope="col">Data Partenza</th>
                        <th scope="col">Data Ritorno</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {travel.map(el => (
                        <tr key={el.id}>
                            <td>{el.destinazione}</td>
                            <td>{el.dataPartenza}</td>
                            <td>{el.dataRitorno}</td>
                            <td><Link to={`/detail/${el.id}`} className="btn btn-primary">view details</Link></td>
                        </tr>

                    ))}

                </tbody>

            </table>
        </>
    )
}