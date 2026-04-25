"use client";

import { Location, Manager } from "@/entities";
import { Label, ListBox, Select } from "@heroui/react";

interface SelectStoreProps {
    locations: Location[],
    defaultStore?: number
}

export default function SelectStore({ locations, defaultStore }: SelectStoreProps) {
    let isUpdating = false;
    const disabledManagers = locations
        .map(location => {
            if (location.manager?.managerId != defaultStore) {
                isUpdating = true;
                return location.manager?.managerId
            }
        })
        .filter(id => id !== undefined)
    return (
        <Select
            name="storeId"
            placeholder="Selecciona una sucursal"
            disabledKeys={disabledManagers}
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