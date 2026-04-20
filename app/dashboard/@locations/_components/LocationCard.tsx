import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { Card, CardContent, CardHeader, Link } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";

export default async function LocationCArd({ store }: { store: string | string[] | undefined }) {
  if (!store) return null;

  const token = (await cookies()).get(TOKEN_NAME)?.value;

  const location = await axios.get<Location>(`${API_URL}/locations/${store}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data).catch(err => console.log(err))

  if (!location) return null;
  console.log(location)
  return (
    <Card>
      <CardHeader>
        <b>Tienda: {location.locationName}</b>
      </CardHeader>
      <CardContent>
        <Link href={`/dashboard/employees`}>
          <p>Manager: <b>{location.manager?.managerFullname}</b></p>
        </Link>
      </CardContent>
    </Card>
  )
}