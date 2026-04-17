import axios from "axios";

const CountPage = async () => {
    const countLocations = await axios.get("http://localhost:3100/locations")
    console.log(countLocations.data)
    return (
        <h2>Count: {countLocations.data.length}</h2>
    )
}

export default CountPage;