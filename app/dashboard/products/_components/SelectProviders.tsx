import { Provider } from "@/entities";
import { Label, ListBox, Select } from "@heroui/react";

export default function SelectProvider({ providers, defaultValue }: { providers: Provider[], defaultValue?: string }) {
    return (
        <Select
            name="provider"
            placeholder="Selecciona proveedor"
            defaultSelectedKey={defaultValue}
        >
            <Label>Proveedores</Label>
            <Select.Trigger className="w-full">
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
                <ListBox>
                    {
                        providers.map(provider => {
                            return (
                                <ListBox.Item key={provider.providerId} id={provider.providerId} textValue={provider.providerName}>
                                    {provider.providerName}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            )
                        })
                    }
                </ListBox>
            </Select.Popover>
        </Select>
    );
}