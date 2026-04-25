"use client";

import { Label, ListBox, Select } from "@heroui/react";
import { Location } from "@/entities";
import { useRouter } from "next/navigation";

export default function SelectLocations({ locations, store }: { locations: Location[], store: string | string[] | undefined }) {
  const router = useRouter();
  if (typeof store === "object") return;
  return (
    <Select
      className="flex justify-center items-center w-full"
      placeholder="Selecciona"
      onChange={(e) => {
        router.push(`/dashboard?store=${e}`)
      }}
      defaultSelectedKey={store ? +store : undefined}
    >
      <Label>Location</Label>
      <Select.Trigger className={"w-1/2"}>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item key={0} id={0} textValue={"Ninguna"}>
            Ninguna
            <ListBox.ItemIndicator />
          </ListBox.Item>
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