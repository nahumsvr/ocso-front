import { createManager } from "@/actions.ts/managers/create";
import { API_URL } from "@/constants";
import { Manager, Location } from "@/entities";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Plus } from "@gravity-ui/icons";
import SelectLocation from "./SelectLocation";

export default async function FormNewManager() {

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
      <form action={createManager} className="flex flex-col gap-2">
        <TextField name="managerName" type="text" isRequired>
          <Label>Nombre del manager</Label>
          <Input type="text" placeholder="Nombre del manager" />
          <FieldError>El manager es requerido</FieldError>
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
        {/* <SelectLocation managers={managers} locations={locations}></SelectLocation> */}
        <Button type="submit" className="w-full flex items-center justify-center gap-2">
          <Plus />
          Crear
        </Button>
      </form>
    </Card>
  )
}