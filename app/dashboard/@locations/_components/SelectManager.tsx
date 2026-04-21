"use client";

import { Location, Manager } from "@/entities";
import { Label, ListBox, Select } from "@heroui/react";

export default function SelectManager({ managers, locations }: { managers: Manager[], locations: Location[] }) {
  const disabledManagers = locations
    .map(location => location.manager?.managerId)
    .filter(id => id !== undefined)
  return (
    <Select
      name="manager"
      placeholder="Selecciona manager"
      disabledKeys={disabledManagers}
    >
      <Label>Managers</Label>
      <Select.Trigger className="w-full">
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