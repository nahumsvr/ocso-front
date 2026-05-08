"use client";
import { Button, Modal, type ButtonProps } from "@heroui/react";

export default function ModalComponent({ children, icon, buttonLabel, title, variant }: { children: React.ReactNode, icon?: React.ReactNode, buttonLabel: string, title: string, variant?: ButtonProps['variant'] }) {
    return (
        <Modal>
            <Button variant={variant}>
                {icon}
                {buttonLabel}
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>{title}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            {children}
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}