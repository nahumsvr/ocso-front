import deleteProvider from "@/actions.ts/providers/delete";
import { Button, Input } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";

export default function DeleteProviderButton({ providerId }: { providerId: string }) {
    const deleteAction = deleteProvider.bind(null, providerId);
    return (
        <form action={deleteAction}>
            <Input type="hidden" name="deleteValue" value={providerId} />
            <Button type="submit" className="flex items-center justify-center gap-2" variant="danger">
                <TrashBin />
                Eliminar
            </Button>
        </form>
    )
}