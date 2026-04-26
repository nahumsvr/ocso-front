import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { createProvider } from "@/actions.ts/providers/create";

export default async function FormUpdateProvider() {
    return (
        <form action={createProvider} className="flex flex-col gap-2">
            <TextField name="providerName" type="text" isRequired>
                <Label>Nombre</Label>
                <Input type="text" placeholder="Nombre del provider" />
                <FieldError>El provider es requerido</FieldError>
            </TextField>
            <TextField name="providerEmail" type="text" isRequired>
                <Label>Email</Label>
                <Input type="text" placeholder="example@mail.com" />
                <FieldError>El email es requerido</FieldError>
            </TextField>
            <TextField name="providerPhoneNumber" type="text" isRequired>
                <Label>Teléfono</Label>
                <Input type="text" placeholder="5524002121" />
                <FieldError>El teléfono es requerido</FieldError>
            </TextField>
            <Button type="submit" className="w-full">Crear</Button>
        </form>
    )
}