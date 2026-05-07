import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import Image from "next/image";
import UpdateEmployeeForm from "./_components/UpdateEmployeeForm";
import { Card, Link, Separator } from "@heroui/react";
import { Envelope, Handset, MapPin } from "@gravity-ui/icons";
import CreateEmployeeModal from "../_components/CreateEmployeeModal";
import CreateUserEmployeeForm from "./_components/FormCreateEmployeeUser";
import DeleteEmployee from "./_components/DeleteEmployee";
import UpdateUserModal from "./_components/UpdateUserModal";
import UpdateEmployeeUserForm from "./_components/FormUpdateEmployeeUser";


export default async function EmployeePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const employee: Employee = await fetch(`${API_URL}/employees/${id}`, {
        headers: await AuthHeaders(),
        next: {
            tags: ["dashboard:employees", `dashboard:employees:${id}`]
        }
    })
        .then(async (res) => {
            if (!res.ok) {
                throw new Error("Error al obtener el empleado");
            }
            return res.json();
        })
        .catch((error) => {
            console.error(error);
            return null;
        });

    if (!employee) {
        return <div>Error al obtener el empleado</div>
    }

    return (
        <div className="grid grid-cols-2 gap-10 h-full p-10">
            <EmployeeCard employee={employee} >
                {employee.employeePhotoUrl && (
                    <Image src={employee.employeePhotoUrl} alt={employee.employeeName} width={200} height={200} className="rounded-md object-cover w-[200px] h-[200px]" />
                )}
            </EmployeeCard>
            <UpdateEmployeeForm employee={employee} />
        </div>
    )
}

const EmployeeCard = async ({ employee, children }: { employee: Employee, children: React.ReactNode }) => {
    return (
        <Card className="w-[400px] h-fit">
            <Card.Header>
                <Card.Title className="font-semibold text-lg">{employee.employeeName} {employee.employeeLastName}</Card.Title>
            </Card.Header>
            <Separator />
            <Card.Content className="grid grid-cols-2">
                <div className="flex flex-col gap-2 justify-center">
                    <div className="flex items-center gap-2">
                        <Envelope />
                        <p>{employee.employeeEmail}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Handset />
                        <p>{employee.employeePhoneNumber}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin />
                        {employee.location?.locationName ? (
                            <Link href={`/dashboard/?store=${employee.location?.locationId}`}>
                                <p>{employee.location?.locationName}</p>
                            </Link>
                        ) : (
                            <p>Sin ubicación asignada</p>
                        )}
                    </div>
                    {
                        !employee.user ? (
                            <CreateEmployeeModal>
                                <CreateUserEmployeeForm employeeId={employee.employeeId} />
                            </CreateEmployeeModal>
                        ) : (
                            <UpdateUserModal>
                                <UpdateEmployeeUserForm employee={employee} />
                            </UpdateUserModal>
                        )
                    }
                    <DeleteEmployee employee={employee} />
                </div>
                {children}
            </Card.Content>
        </Card>
    )
}
