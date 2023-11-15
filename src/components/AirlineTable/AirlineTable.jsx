import { useSelector } from "react-redux";

function AirlineTable() {

    const airlines = useSelector(store => store.airlines);
    console.log(airlines);

    return (
        <table>
            <thead>
                <tr>
                    <th>Airlines</th>
                </tr>
            </thead>
            {/* Airlines listed here */}
            <tbody>
                {airlines.map((airline, index) => (
                    <tr key={index}>
                        <td>{airline}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default AirlineTable;