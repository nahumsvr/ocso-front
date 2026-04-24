import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Envelope, Handset, Person } from "@gravity-ui/icons";
import { Card, CardHeader, CardTitle, Separator } from "@heroui/react";
import Link from "next/link";

export default async function ManagerCard() {
  const data: Manager[] | undefined = await fetch(`${API_URL}/managers/`, {
    headers: await AuthHeaders(),
    next: { tags: ["dashboard:managers"] },
  })
    .then((res) => (res.ok ? res.json() : undefined))
    .catch((error) => { console.log(error); return undefined; })

  if (!data) return null;

  return (
    <div className="w-[400px] h-full flex flex-col gap-5 overflow-y-auto overflow-hidden">
      {
        data.map((manager) => {
          return (
            <Link key={manager.managerId} href={`/dashboard/managers/${manager.managerId}`}>
              <Card key={manager.managerId} className="h-full w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Person />
                    <b>{manager.managerFullname}</b>
                  </CardTitle>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <Envelope />
                    {manager.managerEmail}
                  </div>
                  <div className="flex items-center gap-2">
                    <Handset />
                    {manager.managerPhoneNumber}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          )

        })
      }
    </div>
  );
}