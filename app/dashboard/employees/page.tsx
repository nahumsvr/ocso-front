import { AuthHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { Table } from "@heroui/react";
import { Employee } from "@/entities";
import EmployeeCard from "./_components/EmployeeCard";
import EmployeePhotoCard from "./_components/EmployeePhotoCard";
import Link from "next/link";
const EmployeesPage = async () => {
    const employees = await fetch(`${API_URL}/employees`, {
        headers: await AuthHeaders(),
        next: {
            tags: ['dashboard:employees']
        }
    }).then(res => res.json()).catch((error) => { console.error(error); return [] });

    return (
        <div className="p-10">
            {employees.length > 0 ? (
                <div className="flex gap-4">
                    {employees.map((employee: Employee) => {
                        if (employee.employeePhotoUrl && employee.employeePhotoUrl.trim() !== '') {
                            return (
                                <Link key={employee.employeeId} href={`/dashboard/employees/${employee.employeeId}`}>
                                    <EmployeePhotoCard employee={employee} />
                                </Link>
                            )
                        } else {
                            return (
                                <Link key={employee.employeeId} href={`/dashboard/employees/${employee.employeeId}`}>
                                    <EmployeeCard employee={employee} />
                                </Link>
                            )
                        }
                    })}
                </div>
            ) : (
                <p>No hay empleados</p>
            )}
        </div>
    )
}

export default EmployeesPage;


const EmployeeTable = ({ employees }: { employees: Employee[] }) => {
    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content>
                    <Table.Header>
                        <Table.Column>Nombre</Table.Column>
                        <Table.Column>Apellido</Table.Column>
                        <Table.Column>Correo</Table.Column>
                        <Table.Column>Teléfono</Table.Column>
                        <Table.Column>Acciones</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {employees.map((employee: Employee) => (
                            <Table.Row key={employee.employeeId}>
                                <Table.Cell>{employee.employeeName}</Table.Cell>
                                <Table.Cell>{employee.employeeLastName}</Table.Cell>
                                <Table.Cell>{employee.employeeEmail}</Table.Cell>
                                <Table.Cell>{employee.employeePhoneNumber}</Table.Cell>
                                <Table.Cell>
                                    <Link href={`/dashboard/employees/${employee.employeeId}`}>
                                        Ver
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    )
}