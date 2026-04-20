import axios from "axios";
import { Location } from "@/entities";
import SelectLocations from "./_components/SelectLocations";
import LocationCard from "./_components/LocationCard";

const LocationsPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const store = (await searchParams)?.store;
    const { data } = await axios.get<Location[]>("http://localhost:3100/locations")
    return (
        <div className="w-8/12">
            <SelectLocations locations={data} store={store} />
            <LocationCard store={store} />
        </div>
    )
}

export default LocationsPage;