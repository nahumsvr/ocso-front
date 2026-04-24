import deleteManager from "@/actions.ts/managers/delete";
import { Button, Input } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";

export default function DeleteManagerButton({ managerId }: { managerId: string }) {
    const deleteAction = deleteManager.bind(null, managerId);
    return (
        <form action={deleteAction}>
            <Input type="hidden" name="deleteValue" value={managerId} />
            <Button type="submit" className="flex items-center justify-center gap-2" variant="danger">
                <TrashBin />
                Eliminar
            </Button>
        </form>
    )
}