import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { API_URL } from "@/constants";
import { Manager, Location } from "@/entities";
// import SelectManager from "./SelectManager";
import { AuthHeaders } from "@/helpers/authHeaders";
import { updateManager } from "@/actions.ts/managers/update";
import SelectStore from "./SelectStore";

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
    if (!manager) return null;
    const updateManagerWithId = updateManager.bind(null, manager.managerId);

    const res = await fetch(`${API_URL}/locations`, {
        method: "GET",
        headers: await AuthHeaders(),
    })
    const locations: Location[] = await res.json();

    return (
        <form action={updateManagerWithId} className="flex flex-col gap-2">
            <TextField name="managerFullname" type="text" isRequired defaultValue={manager?.managerFullname}>
                <Label>Nombre</Label>
                <Input type="text" placeholder="Nombre del manager" />
                <FieldError>El manager es requerido</FieldError>
            </TextField>
            <TextField name="managerEmail" type="text" isRequired defaultValue={manager?.managerEmail}>
                <Label>Email</Label>
                <Input type="text" placeholder="example@mail.com" />
                <FieldError>El email es requerido</FieldError>
            </TextField>
            <TextField name="managerPhoneNumber" type="text" isRequired defaultValue={manager?.managerPhoneNumber}>
                <Label>Teléfono</Label>
                <Input type="text" placeholder="70000000" />
                <FieldError>El teléfono es requerido</FieldError>
            </TextField>
            <TextField name="managerSalary" type="number" isRequired defaultValue={String(manager?.managerSalary)}>
                <Label>Sueldo</Label>
                <Input type="number" placeholder="200" />
                <FieldError>El sueldo es requerido</FieldError>
            </TextField>
            <div className="flex flex-col gap-2">
                <SelectStore locations={locations} defaultStore={manager.location?.locationId} />
                <Button type="submit" className="w-full">Actualizar</Button>
            </div>
        </form>
    )
}