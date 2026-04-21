import { createLocation } from "@/actions.ts/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Manager, Location } from "@/entities";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import axios from "axios";
import SelectManager from "./SelectManager";
import { cookies } from "next/headers";

export default async function FormNewLocation() {
  const token = (await cookies()).get(TOKEN_NAME)?.value;

  const managers = await axios.get<Manager[]>(`${API_URL}/managers`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.data)
    .catch(() => [])

  const locations = await axios.get<Location[]>(`${API_URL}/locations`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.data)
    .catch(() => [])

  return (
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
  )
}