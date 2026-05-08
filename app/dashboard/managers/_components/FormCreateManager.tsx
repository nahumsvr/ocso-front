"use client";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { Location } from "@/entities";
import SelectLocation from "@/app/dashboard/managers/_components/SelectLocation";
import { createManager } from "@/actions/managers/create";

export default function FormCreateManager({ locations }: { locations: Location[] }) {
    return (
        <form className="flex flex-col gap-2" action={createManager}>
            <TextField name="managerFullname" type="text" isRequired>
                <Label>Nombre del gerente</Label>
                <Input type="text" placeholder="Example Name" />
                <FieldError>El nombre es requerido</FieldError>
            </TextField>
            <TextField name="managerEmail" type="text" isRequired>
                <Label>Correo electrónico</Label>
                <Input type="email" placeholder="example@mail.com" />
                <FieldError>El correo es requerido</FieldError>
            </TextField>
            <TextField name="managerSalary" type="number" isRequired>
                <Label>Salario</Label>
                <Input type="number" placeholder="12000" />
                <FieldError>El salario es requerido</FieldError>
            </TextField>
            <TextField name="managerPhoneNumber" type="text" isRequired>
                <Label>Teléfono</Label>
                <Input type="text" placeholder="123456789" />
                <FieldError>El teléfono es requerido</FieldError>
            </TextField>
            <SelectLocation locations={locations} />
            <Button type="submit" className="w-full">Crear Manager</Button>
        </form>
    )
}