import { createLocation } from "@/actions.ts/create";
import { API_URL } from "@/constants";
import { Manager, Location } from "@/entities";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";
import SelectManager from "./SelectManager";
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function FormNewLocation() {

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

  return (
    <Card className="w-full">
      <Card.Header>
        <Card.Title> <b>Nueva tienda</b> </Card.Title>
      </Card.Header>
      <form action={createLocation} className="flex flex-col gap-2">
        <TextField name="locationName" type="text" isRequired>
          <Label>Nombre de la tienda</Label>
          <Input type="text" placeholder="Nombre de la tienda" />
          <FieldError>La tienda es requerida</FieldError>
        </TextField>
        <TextField name="locationAddres" type="text" isRequired>
          <Label>Dirección</Label>
          <Input type="text" placeholder="Calle 123" />
          <FieldError>La dirección es requerida</FieldError>
        </TextField>
        <TextField name="latitude" type="number" isRequired>
          <Label>Latitud</Label>
          <Input type="number" placeholder="123" />
          <FieldError>La latitud es requerida</FieldError>
        </TextField>
        <TextField name="longitude" type="number" isRequired>
          <Label>Longitud</Label>
          <Input type="number" placeholder="123" />
          <FieldError>La longitud es requerida</FieldError>
        </TextField>
        <SelectManager managers={managers} locations={locations}></SelectManager>
        <Button type="submit" className="w-full">Crear</Button>
      </form>
    </Card>
  )
}