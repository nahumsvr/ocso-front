import deleteLocation from "@/actions.ts/locations/delete";
import { Button } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";


export default function DeleteLocations({ store }: { store: string }) {
    if (!store) return null;
    return (
        <form action={deleteLocation}>
            <Button
                type="submit"
                name="deleteValue"
                value={store}
                variant={"danger-soft"}
            >
                <TrashBin />
                Borrar
            </Button>
        </form>
    )
}