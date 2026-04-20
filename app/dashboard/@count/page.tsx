import axios from "axios";

const CountPage = async () => {
    const countLocations = await axios.get("http://localhost:3100/locations")
    return (
        <h2>Total de sucursales: {countLocations.data.length}</h2>
    )
}

export default CountPage;