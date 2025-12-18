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
            <div className="container mt-5 bg-light p-3">
                <h3 className="pb-4">Lista dei prossimi viaggi:</h3>
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th className=" text-start" scope="col">Destinazione</th>
                            <th scope="col">Data Partenza</th>
                            <th scope="col">Data Ritorno</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {travel.map(el => (
                            <tr key={el.id}>
                                <td className=" text-start">{el.destinazione}</td>
                                <td>{el.dataPartenza}</td>
                                <td>{el.dataRitorno}</td>
                                <td >
                                    <Link to={`/detail/${el.id}`} className="btn btn-primary btn-sm"><i class="bi bi-people-fill"></i></Link>
                                    <button className="btn btn-danger btn-sm ms-3" ><i class="bi bi-trash-fill"></i></button>
                                </td>
                            </tr>

                        ))}

                    </tbody>

                </table>
            </div>
        </>
    )
}