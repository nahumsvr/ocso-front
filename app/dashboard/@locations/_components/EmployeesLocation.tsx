import { API_URL, TOKEN_NAME } from "@/constants";
import { Employee } from "@/entities";
import { Card, CardHeader, CardTitle } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
  if (store == "0") return <p>Seleccione una locación</p>;

  const token = (await cookies()).get(TOKEN_NAME)?.value;
  const data = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => response.data)
    .catch((error) => console.log(error))

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