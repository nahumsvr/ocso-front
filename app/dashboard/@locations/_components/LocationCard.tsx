import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { Card, CardContent, CardHeader, Link, Separator } from "@heroui/react";
import { AuthHeaders } from "@/helpers/authHeaders";
import { MapPin, Person } from "@gravity-ui/icons";

export default async function LocationCArd({ store }: { store: string | undefined }) {
  if (!store) return null;
  if (store == "0") return null;

  const location: Location | undefined = await fetch(`${API_URL}/locations/${store}`, {
    headers: await AuthHeaders(),
    next: {
      tags: [`dashboard:locations:${store}`]
    }
  })
    .then((res) => (res.ok ? res.json() : undefined))
    .catch((err) => { console.log(err); return undefined; })

  if (!location) return null;

  const manager = location.manager?.managerFullname;
  return (
    <Card className="w-full">
      <CardHeader>
        <b>{location.locationName}</b>
      </CardHeader>
      <Separator />
      <CardContent>
        {manager ? (
          <Link href={`/dashboard/managers/${location.manager?.managerId}`} className="flex items-center gap-2">
            <Person />
            {manager}
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <Person />
            Sin manager asignado
          </div>
        )}
        <div className="flex items-center gap-2">
          <MapPin />
          {location.locationAddres}
        </div>
      </CardContent>
      {/* <Card.Footer>
        <DeleteLocations store={store} />
      </Card.Footer> */}
    </Card>
  )
}