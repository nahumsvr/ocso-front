import { Employee } from "@/entities";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

export default function EmployeePhotoCard({ employee }: { employee: Employee }) {
    return (
        <Card className="w-[200px] h-[200px]">
            <Card.Header className="h-[50px] absolute top-0 left-0 right-0 p-1 z-10 bg-linear-to-b from-black/60 via-black/50 to-transparent flex flex-col items-center justify-center">
                <Card.Title className="font-semibold text-lg text-center text-white text-shadow-lg">{employee.employeeName} {employee.employeeLastName}</Card.Title>
            </Card.Header>
            <Card.Content className="absolute bottom-0 left-0 right-0 z-0">
                <Image src={employee.employeePhotoUrl!} alt="Foto del empleado" width={200} height={200} className="object-cover; w-[200px] h-[200px]" />
            </Card.Content>
            <Card.Footer className="absolute bottom-3 z-10">
                <Button variant="secondary" className={"bg-gray-300/60 text-blue-700"}>Editar</Button>
            </Card.Footer>
        </Card>
    )
}