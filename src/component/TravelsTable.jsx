



import TravelsList from "./TravelsList"

export default function TravelsTable() {




    return (
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
                <TravelsList />

            </tbody>

        </table>
    )
}