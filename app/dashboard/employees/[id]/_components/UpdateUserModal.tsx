"use client";
import { Button, Modal } from "@heroui/react";
import { Pencil } from "@gravity-ui/icons";

export default function UpdateUserModal({ children }: { children: React.ReactNode }) {
    return (
        <Modal>
            <Button variant="primary" className="z-10">
                <Pencil />
                Actualizar usuario
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading className="font-bold">Registrar usuario del empleado</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-1">
                            {children}
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}