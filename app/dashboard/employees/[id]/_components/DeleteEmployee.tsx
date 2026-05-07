"use client";

import { TrashBin, TriangleExclamation } from "@gravity-ui/icons";
import { Button, Input, Modal } from "@heroui/react";
import { Employee, Product } from "@/entities";
import deleteEmployee from "@/actions/employees/delete";

export default function DeleteEmployee({ employee }: { employee: Employee }) {
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
                            <div>¿Estás seguro de eliminar el empleado {employee.employeeName} {employee.employeeLastName}?</div>
                            <DeleteEmployeeForm employeeId={employee.employeeId} />
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

const DeleteEmployeeForm = ({ employeeId }: { employeeId: string }) => {
    const deleteAction = deleteEmployee.bind(null, employeeId);
    return (
        <form action={deleteAction}>
            <Input type="hidden" name="deleteValue" value={employeeId} />
            <Button type="submit" className="w-full" variant="danger">
                <TrashBin />
                Eliminar
            </Button>
        </form>
    )
}