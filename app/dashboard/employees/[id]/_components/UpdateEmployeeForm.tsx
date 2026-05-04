import { updateEmployee } from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";

export default function UpdateEmployeeForm({ employee }: { employee: Employee }) {
    if (!employee) return null;
    const updateEmployeeWithId = updateEmployee.bind(null, employee.employeeId);

    return (
        <Card className="h-fit">
            <Card.Header>
                <Card.Title>Actualizar empleado</Card.Title>
            </Card.Header>
            <Card.Content>
                <form className="flex flex-col gap-2" action={updateEmployeeWithId}>
                    <TextField name="employeeName" type="text" isRequired defaultValue={employee.employeeName}>
                        <Label>Nombre</Label>
                        <Input type="text" placeholder="Nombre del employee" />
                        <FieldError>El employee es requerido</FieldError>
                    </TextField>
                    <TextField name="employeeLastName" type="text" isRequired defaultValue={employee.employeeLastName}>
                        <Label>Apellidos</Label>
                        <Input type="text" placeholder="Apellidos del employee" />
                        <FieldError>Los apellidos son requeridos</FieldError>
                    </TextField>
                    <TextField name="employeePhoneNumber" type="text" isRequired defaultValue={employee.employeePhoneNumber}>
                        <Label>Teléfono</Label>
                        <Input type="text" placeholder="70000000" />
                        <FieldError>El teléfono es requerido</FieldError>
                    </TextField>
                    <TextField name="employeeEmail" type="email" isRequired defaultValue={employee.employeeEmail}>
                        <Label>Email</Label>
                        <Input type="email" placeholder="example@mail.com" />
                        <FieldError>El email es requerido</FieldError>
                    </TextField>
                    <Label>Foto</Label>
                    <Input type="file" name="employeePhotoUrl" accept="image/*" />
                    <Button type="submit" className="w-full">Actualizar</Button>
                </form>
            </Card.Content>
        </Card>
    )
}