"use client";

import { Location } from "@/entities";
import { Label, ListBox, Select } from "@heroui/react";

interface SelectLocationProps {
    locations: Location[],
    defaultStore?: number
}

export default function SelectLocation({ locations, defaultStore }: SelectLocationProps) {

    return (
        <Select
            name="location"
            placeholder="Selecciona una sucursal"
            defaultSelectedKey={defaultStore ? defaultStore : undefined}
        >
            <Label>Sucursal</Label>
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
                        locations.map(location => {
                            return (
                                <ListBox.Item key={location.locationId} id={location.locationId} textValue={location.locationName}>
                                    {location.locationName}
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