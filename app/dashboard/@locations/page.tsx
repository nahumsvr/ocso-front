import { Location } from "@/entities";
import SelectLocations from "./_components/SelectLocations";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";

const LocationsPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) => {
    const store = (await searchParams)?.store;
    const data: Location[] = await fetch("http://localhost:3100/locations").then((res) => res.json())
    return (
        <div className="w-1/2 p-4 flex flex-col items-center gap-4">
            <SelectLocations locations={data} store={store} />
            <LocationCard store={store} />
            {store == "0" && <FormNewLocation />}
        </div>
    )
}

export default LocationsPage;