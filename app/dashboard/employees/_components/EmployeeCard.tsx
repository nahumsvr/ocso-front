import { Employee } from "@/entities";
import { Envelope, Handset } from "@gravity-ui/icons";
import { Button, Card, Separator } from "@heroui/react";

export default function EmployeeCard({ employee }: { employee: Employee }) {
    return (
        <Card className="w-[200px] h-[200px]">
            <Card.Header>
                <Card.Title className="font-semibold text-lg">{employee.employeeName} {employee.employeeLastName}</Card.Title>
            </Card.Header>
            <Separator />
            <Card.Content>
                <div className="flex items-center gap-2">
                    <Envelope />
                    <p>{employee.employeeEmail}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Handset />
                    <p>{employee.employeePhoneNumber}</p>
                </div>
            </Card.Content>
            <Card.Footer className="absolute bottom-3 z-10">
                <Button variant="secondary">Editar</Button>
            </Card.Footer>
        </Card>
    )
}