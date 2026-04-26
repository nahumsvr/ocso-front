"use client";

import { TrashBin, TriangleExclamation } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import DeleteProviderButton from "./DeleteProviderButton";
import { Provider } from "@/entities";

export default function DeleteProviderForm({ provider }: { provider: Provider }) {
    return (
        <Modal>
            <Button variant="danger">
                <TrashBin />
                Eliminar
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <TriangleExclamation className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Atención</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="flex flex-col gap-4">
                            <div>¿Estás seguro de eliminar el proveedor {provider.providerName}?</div>
                            <DeleteProviderButton providerId={provider.providerId} />
                        </Modal.Body>
                        {/* <Modal.Footer>
            </Modal.Footer> */}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}