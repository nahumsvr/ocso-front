import { AuthHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { Table } from "@heroui/react";
import { Employee, Location } from "@/entities";
import EmployeeCard from "./_components/EmployeeCard";
import EmployeePhotoCard from "./_components/EmployeePhotoCard";
import Link from "next/link";
import CreateEmployee from "./_components/CreateEmployee";
import CreateEmployeeForm from "./_components/FormCreateEmployee";
import ListEmployees from "./_components/ListEmployees";
const EmployeesPage = async () => {
    const employees = await fetch(`${API_URL}/employees`, {
        headers: await AuthHeaders(),
        next: {
            tags: ['dashboard:employees']
        }
    }).then(res => res.json()).catch((error) => { console.error(error); return [] });

    const locations: Location[] = await fetch(
        `${API_URL}/locations`,
        {
            headers: await AuthHeaders(),
            next: {
                tags: ['dashboard:locations']
            }
        }
    ).then(res => res.json()).catch((error) => { console.error(error); return [] });

    return (
        <div className="p-10">
            <div className="absolute bottom-10 right-10">
                <CreateEmployee>
                    <CreateEmployeeForm />
                </CreateEmployee>
            </div>
            {employees.length > 0 ? (
                <ListEmployees employees={employees} locations={locations} />
            ) : (
                <p>No hay empleados</p>
            )}
        </div>
    )
}

export default EmployeesPage;