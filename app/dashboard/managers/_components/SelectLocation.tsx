"use client";

import { Location } from "@/entities";
import { Label, ListBox, Select } from "@heroui/react";

interface SelectLocationProps {
    locations: Location[],
    defaultStore?: number
}

export default function SelectLocation({ locations, defaultStore }: SelectLocationProps) {
    let isUpdating = false;
    const disabledLocations = locations
        .map(location => {
            if (location.manager?.managerId != defaultStore) {
                isUpdating = true;
                return location.locationId
            }
        })
        .filter(id => id !== undefined)
    return (
        <Select
            name="location"
            placeholder="Selecciona una sucursal"
            disabledKeys={disabledLocations}
            defaultSelectedKey={defaultStore ? defaultStore : undefined}
        >
            <Label>Sucursal</Label>
            <Select.Trigger className="w-full">
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
                <ListBox>
                    {!isUpdating &&
                        <ListBox.Item key={0} id={0} textValue={"Ninguna"}>
                            Ninguna
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    }
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