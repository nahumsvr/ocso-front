import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Card, CardHeader, CardTitle } from "@heroui/react";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
  if (store == "0" || !store) return <p>Seleccione una locación</p>;
  const data: Employee[] | undefined = await fetch(`${API_URL}/employees/location/${store}`, {
    headers: await AuthHeaders(),
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
              <CardTitle>Nombre: <b>{fullName}</b></CardTitle>
              <p>Email: {employee.employeeEmail}</p>
              <p>Telefono: {employee.employeePhoneNumber}</p>
            </CardHeader>
          </Card>

        })
      }
    </>
  );
}