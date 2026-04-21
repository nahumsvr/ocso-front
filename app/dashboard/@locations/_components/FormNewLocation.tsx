import { createLocation } from "@/actions.ts/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Manager } from "@/entities";
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
  return (
    <form action={createLocation} className="flex flex-col gap-2">
      <TextField name="storeName" type="text" isRequired>
        <Label>Nombre de la tienda</Label>
        <Input type="text" />
        <FieldError>La tienda es requerida</FieldError>
      </TextField>
      <TextField name="address" type="text" isRequired>
        <Label>Dirección</Label>
        <Input type="text" />
        <FieldError>La dirección es requerida</FieldError>
      </TextField>
      <TextField name="latitude" type="number" isRequired>
        <Label>Latitud</Label>
        <Input type="number" />
        <FieldError>La latitud es requerida</FieldError>
      </TextField>
      <TextField name="longitude" type="number" isRequired>
        <Label>Longitud</Label>
        <Input type="number" />
        <FieldError>La longitud es requerida</FieldError>
      </TextField>
      <SelectManager managers={managers}></SelectManager>
      <Button type="submit" className="w-full">Crear</Button>
    </form>
  )
}