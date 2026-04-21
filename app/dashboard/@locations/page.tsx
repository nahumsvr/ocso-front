import axios from "axios";
import { Location } from "@/entities";
import SelectLocations from "./_components/SelectLocations";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";

const LocationsPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const store = (await searchParams)?.store;
    const { data } = await axios.get<Location[]>("http://localhost:3100/locations")
    return (
        <div className="w-8/12 p-4 flex flex-col gap-4">
            <SelectLocations locations={data} store={store} />
            <LocationCard store={store} />
            {store == "0" && <FormNewLocation />}
        </div>
    )
}

export default LocationsPage;