"use client";
import Image from "next/image";
import { Button, Modal } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";

export default function CreateEmployeeModal({ children }: { children: React.ReactNode }) {
    return (
        <Modal>
            <Button variant="primary" className="z-10">
                <Plus />
                Registar usuario
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