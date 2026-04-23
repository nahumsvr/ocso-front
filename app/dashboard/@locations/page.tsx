import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Location } from "@/entities";
import SelectLocations from "./_components/SelectLocations";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import UpdateLocation from "./_components/UpdateLocations";
import FormUpdateLocation from "./_components/FormUpdateLocation";

const LocationsPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) => {
    const store = (await searchParams)?.store;
    const data: Location[] = await fetch(`${API_URL}/locations`, {
        headers: await AuthHeaders(),
        next: { tags: ["dashboard:locations"] },
    })
        .then((res) => res.json())
        .catch((err) => { console.log(err); return [] })
    return (
        <div className="w-1/2 p-4 flex flex-col items-center gap-4">
            <SelectLocations locations={data} store={store} />
            <LocationCard store={store} />
            {store == "0" && <FormNewLocation />}
            {(store != "0" && store != undefined) && <UpdateLocation>
                <FormUpdateLocation store={store} />
            </UpdateLocation>}
        </div>
    )
}

export default LocationsPage;