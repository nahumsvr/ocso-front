import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Envelope, Handset, PersonWorker } from "@gravity-ui/icons";
import { Card, CardHeader, CardTitle, Separator } from "@heroui/react";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
  if (store == "0" || !store) return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <p className="text-lg text-neutral-500">Seleccione una locación para ver los empleados</p>
    </div>
  );

  const data: Employee[] | undefined = await fetch(`${API_URL}/employees/location/${store}`, {
    headers: await AuthHeaders(),
    next: { tags: ["dashboard:locations:employees"] },
  })
    .then((res) => (res.ok ? res.json() : undefined))
    .catch((error) => { console.log(error); return undefined; })

  if (!data) return null;

  return (
    <>
      {
        data.map((employee) => {
          const fullName = `${employee.employeeName} ${employee.employeeLastName}`;
          return <Card key={employee.employeeId} className="h-min">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PersonWorker />
                <b>{fullName}</b>
              </CardTitle>
              <Separator />
              <div className="flex items-center gap-2">
                <Envelope />
                {employee.employeeEmail}
              </div>
              <div className="flex items-center gap-2">
                <Handset />
                {employee.employeePhoneNumber}
              </div>
            </CardHeader>
          </Card>

        })
      }
    </>
  );
}