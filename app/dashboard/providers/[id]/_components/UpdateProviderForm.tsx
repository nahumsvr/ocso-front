import { updateProvider } from "@/actions.ts/providers/update";
import { Provider } from "@/entities";
import { Button, Card, FieldError, Input, Label, Separator, TextField } from "@heroui/react";
import DeleteProviderForm from "./DeleteProviderForm";

export default function UpdateProviderForm({ provider }: { provider: Provider }) {
    const updateProviderWithId = updateProvider.bind(null, provider.providerId);
    return (
        <Card className="min-w-[300px]">
            <Card.Header>
                <Card.Title>Actualizar proveedor</Card.Title>
            </Card.Header>
            <Separator />
            <Card.Content>
                <form
                    className="flex flex-col gap-2"
                    action={updateProviderWithId}
                >
                    <TextField name="providerName" type="text" defaultValue={provider.providerName} isRequired>
                        <Label>Nombre</Label>
                        <Input type="text" placeholder="Nombre del proveedor" />
                        <FieldError>El proveedor es requerido</FieldError>
                    </TextField>
                    <TextField name="providerEmail" type="text" defaultValue={provider.providerEmail} isRequired>
                        <Label>Email</Label>
                        <Input type="text" placeholder="example@mail.com" />
                        <FieldError>El email es requerido</FieldError>
                    </TextField>
                    <TextField name="providerPhoneNumber" type="text" defaultValue={provider.providerPhoneNumber} isRequired>
                        <Label>Teléfono</Label>
                        <Input type="text" placeholder="5524002121" />
                        <FieldError>El teléfono es requerido</FieldError>
                    </TextField>
                    <div className="flex justify-end gap-2">
                        <Button type="submit" className="w-full">Actualizar</Button>
                        <DeleteProviderForm provider={provider} />
                    </div>
                </form>
            </Card.Content>
        </Card>
    )
}