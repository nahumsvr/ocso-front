"use client";

import { Manager } from "@/entities";
import { Label, ListBox, Select } from "@heroui/react";

export default function SelectManager({ managers }: { managers: Manager[] }) {
  return (
    <Select
      className={"flex justify-center items-center"}
      placeholder="Selecciona"
    // onChange={(e) => {
    //   router.push(`/dashboard?store=${e}`)
    // }}
    >
      <Label>Managers</Label>
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
            managers.map(manager => {
              return (
                <ListBox.Item key={manager.managerId} id={manager.managerId} textValue={manager.managerFullname}>
                  {manager.managerFullname}
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