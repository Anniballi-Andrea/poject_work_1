import { useGlobalProvider } from "../context/GlobalContext"
import { Link } from "react-router-dom"

export default function TravelsList() {

    const { travel, setTravel } = useGlobalProvider()

    function removeTravel(id) {
        const filteredTravel = travel.filter((el) => el.id !== id)

        setTravel(filteredTravel)

    }

    return (

        travel.map(el => (
            <tr key={el.id}>
                <td className=" text-start">{el.destinazione}</td>
                <td>{el.dataPartenza}</td>
                <td>{el.dataRitorno}</td>
                <td >
                    <Link to={`/detail/${el.id}`} className="btn btn-primary btn-sm"><i className="bi bi-people-fill"></i></Link>
                    <button className="btn btn-danger btn-sm ms-3" onClick={() => removeTravel(el.id)}><i className="bi bi-trash-fill"></i></button>
                </td>
            </tr>

        ))
    )
}