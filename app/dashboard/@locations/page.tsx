import axios from "axios";
import { Location } from "@/entities";
import SelectLocations from "./_components/SelectLocations";

const LocationsPage = async () => {
    const { data } = await axios.get<Location[]>("http://localhost:3100/locations")
    return (
        <div className="w-8/12">
            <SelectLocations locations={data} />
        </div>
    )
}

export default LocationsPage;