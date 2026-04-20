"use client";

import { Label, ListBox, Select } from "@heroui/react";
import { Location } from "@/entities";
import { useRouter } from "next/navigation";

export default function SelectLocations({ locations }: { locations: Location[] }) {
  const router = useRouter();
  return (
    <Select className={"flex justify-center items-center"} placeholder="Selecciona" onChange={(e) => {
      router.push(`/dashboard?store=${e}`)
    }}>
      <Label>Location</Label>
      <Select.Trigger className={"w-1/2"}>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {
            locations.map(loc => {
              return (
                <ListBox.Item key={loc.locationId} id={loc.locationId} textValue={loc.locationName}>
                  {loc.locationName}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              )
            })
          }
        </ListBox>
      </Select.Popover>
    </Select>
  )
}