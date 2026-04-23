"use client";

import { Button, Modal } from "@heroui/react";

export default function UpdateLocation({ children }: { children: React.ReactNode }) {
  return (
    <Modal>
      <Button variant="secondary">Actualizar</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              {/* <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon> */}
              <Modal.Heading>Actualizar tienda</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              {children}
            </Modal.Body>
            {/* <Modal.Footer>
            </Modal.Footer> */}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}