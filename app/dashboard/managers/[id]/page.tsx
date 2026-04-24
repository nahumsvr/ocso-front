import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Envelope, Handset, MapPin, Person } from "@gravity-ui/icons";
import { Card, Separator } from "@heroui/react";

export default async function ManagerPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const res = await fetch(`${API_URL}/managers/${id}`, {
    headers: await AuthHeaders(),
    next: { tags: [`dashboard:managers:${id}`] },
  });
  if (!res.ok) return null;

  const data: Manager = await res.json();
  if (!data) return null;
  console.log(data);

  return (
    <Card key={data.managerId} className="h-fit w-full">
      <Card.Header>
        <Card.Title className="flex items-center gap-2">
          <Person />
          <b>{data.managerFullname}</b>
        </Card.Title>
      </Card.Header>
      <Separator />
      <Card.Content>
        <div className="flex items-center gap-2">
          <Envelope />
          {data.managerEmail}
        </div>
        <div className="flex items-center gap-2">
          <Handset />
          {data.managerPhoneNumber}
        </div>
        <div className="flex items-center gap-2">
          <MapPin />
          {data.location?.locationName || "Sin locación asignada"}
        </div>
      </Card.Content>
    </Card>
  )
}