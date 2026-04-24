"use client"
import { Card, CardContent, CardHeader, Link, Separator } from "@heroui/react";
import { Manager } from "@/entities";
import { Envelope, Handset, MapPin, Person } from "@gravity-ui/icons";

export function ManagerCard({ data }: { data: Manager }) {
  return (
    <Card key={data.managerId} className="h-fit w-[800px]">
      <CardHeader>
        <Card.Title className="flex items-center gap-2 text-lg">
          <Person scale={0.7} />
          <b>{data.managerFullname}</b>
        </Card.Title>
      </CardHeader>
      <Separator />
      <CardContent>
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
          {
            data.location ? (
              <Link href={`/dashboard?store=${data.location?.locationId}`}>
                {data.location?.locationName}
              </Link>
            ) : (
              <span>Sin locación asignada</span>
            )
          }
        </div>
      </CardContent>
    </Card>
  )
}