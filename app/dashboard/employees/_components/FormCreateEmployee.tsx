import { createEmployee } from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";
import SelectLocation from "../[id]/_components/SelectLocation";
import { Location } from "@/entities";

export default async function CreateEmployeeForm() {
    const locations: Location[] = await fetch(`${API_URL}/locations`, {
        headers: await AuthHeaders(),

    })
        .then(async (res) => {
            if (!res.ok) {
                throw new Error("Error al obtener las sucursales");
            }
            return res.json();
        })
        .catch((error) => {
            console.error(error);
            return [];
        });

    return (
        <form className="flex flex-col gap-2" action={createEmployee}>
            <TextField name="employeeName" type="text" isRequired>
                <Label>Nombre</Label>
                <Input type="text" placeholder="Nombre del employee" />
                <FieldError>El employee es requerido</FieldError>
            </TextField>
            <TextField name="employeeLastName" type="text" isRequired>
                <Label>Apellidos</Label>
                <Input type="text" placeholder="Apellidos del employee" />
                <FieldError>Los apellidos son requeridos</FieldError>
            </TextField>
            <TextField name="employeePhoneNumber" type="text">
                <Label>Teléfono</Label>
                <Input type="text" placeholder="70000000" />
                <FieldError>El teléfono es requerido</FieldError>
            </TextField>
            <TextField name="employeeEmail" type="email">
                <Label>Email</Label>
                <Input type="email" placeholder="example@mail.com" />
                <FieldError>El email es requerido</FieldError>
                <SelectLocation locations={locations} />
            </TextField>
            <Label>Foto</Label>
            <Input type="file" name="employeePhotoUrl" accept="image/*" />
            <Button type="submit" className="w-full">Crear</Button>
        </form>
    )
}