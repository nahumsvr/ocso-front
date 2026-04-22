import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { Card, CardContent, CardHeader, Link } from "@heroui/react";
import DeleteLocations from "../../_components/DeleteLocations";
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function LocationCArd({ store }: { store: string | undefined }) {
  if (!store) return null;
  if (store == "0") return null;

  const location: Location | undefined = await fetch(`${API_URL}/locations/${store}`, {
    headers: await AuthHeaders(),
  })
    .then((res) => (res.ok ? res.json() : undefined))
    .catch((err) => { console.log(err); return undefined; })

  if (!location) return null;

  const manager = location.manager?.managerFullname;
  return (
    <Card className="w-full">
      <CardHeader>
        <b>Tienda: {location.locationName}</b>
      </CardHeader>
      <CardContent>
        {manager ? (
          <Link href={`/dashboard/employees`}>
            <p>Manager: <b>{manager}</b></p>
          </Link>
        ) : (
          <p>Manager: <b>Sin manager asignado</b></p>
        )}
      </CardContent>
      <Card.Footer>
        <DeleteLocations store={store} />
      </Card.Footer>
    </Card>
  )
}