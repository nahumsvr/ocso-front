"use client";

import { Plus } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

export default function CreateEmployee({ children }: { children: React.ReactNode }) {
    return (
        <Modal>
            <Button variant="primary" className="z-10">
                <Plus />
                Agregar empleado
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading className="font-bold">Crear nuevo empleado</Modal.Heading>
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