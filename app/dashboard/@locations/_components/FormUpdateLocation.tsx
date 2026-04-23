import { createLocation } from "@/actions.ts/create";
import { API_URL } from "@/constants";
import { Manager, Location } from "@/entities";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";
import SelectManager from "./SelectManager";
import { AuthHeaders } from "@/helpers/authHeaders";
import UpdateLocation from "./UpdateLocations";

export default async function FormUpdateLocation({ store }: { store: string | string[] | undefined }) {
    console.log("store: ", store)
    if (!store) return

    const managers: Manager[] = await fetch(`${API_URL}/managers`, {
        headers: await AuthHeaders(),
        next: {
            tags: ["dashboard:managers"]
        }
    })
        .then((res) => (res.ok ? res.json() : []))
        .catch(() => []);

    const locations: Location[] = await fetch(`${API_URL}/locations`, {
        headers: await AuthHeaders(),
        next: {
            tags: ["dashboard:locations"]
        }
    })
        .then((res) => (res.ok ? res.json() : []))
        .catch(() => []);

    let foundLocation = locations.find(l => l.locationId == +store)
    let foundManager = managers.find(m => m.managerId == foundLocation?.manager?.managerId)

    return (
        <form action={createLocation} className="flex flex-col gap-2">
            <TextField name="locationName" type="text" isRequired defaultValue={foundLocation?.locationName}>
                <Label>Nombre de la tienda</Label>
                <Input type="text" placeholder="Nombre de la tienda" />
                <FieldError>La tienda es requerida</FieldError>
            </TextField>
            <TextField name="locationAddres" type="text" isRequired defaultValue={foundLocation?.locationAddres}>
                <Label>Dirección</Label>
                <Input type="text" placeholder="Calle 123" />
                <FieldError>La dirección es requerida</FieldError>
            </TextField>
            <TextField name="latitude" type="number" isRequired defaultValue={String(foundLocation?.locationLatLong[0])}>
                <Label>Latitud</Label>
                <Input type="number" placeholder="123" />
                <FieldError>La latitud es requerida</FieldError>
            </TextField>
            <TextField name="longitude" type="number" isRequired defaultValue={String(foundLocation?.locationLatLong[1])}>
                <Label>Longitud</Label>
                <Input type="number" placeholder="123" />
                <FieldError>La longitud es requerida</FieldError>
            </TextField>
            <SelectManager managers={managers} locations={locations} defaultManager={foundManager?.managerId}></SelectManager>
            <Button type="submit" className="w-full">Crear</Button>
        </form>
    )
}