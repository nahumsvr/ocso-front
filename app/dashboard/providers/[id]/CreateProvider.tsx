"use client";

import { Plus } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

export default function CreateProvider({ children }: { children: React.ReactNode }) {
  return (
    <Modal>
      <Button variant="primary">
        <Plus />
        Agregar proveedor
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="font-bold">Crear nuevo proveedor</Modal.Heading>
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