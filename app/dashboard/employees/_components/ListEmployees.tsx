"use client";
import { Employee } from "@/entities";
import EmployeeCard from "./EmployeeCard";
import EmployeePhotoCard from "./EmployeePhotoCard";
import Link from "next/link";
import { Label, ListBox, Select } from "@heroui/react";
import { useEffect, useState } from "react";
import { Location } from "@/entities";

export default function ListEmployees({ employees, locations }: { employees: Employee[], locations: Location[] }) {
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(employees);
    const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);

    useEffect(() => {
        setFilteredEmployees(employees.filter((employee: Employee) => {
            if (selectedLocation == undefined || selectedLocation == 0) {
                return employee;
            }
            if (employee.location?.locationId == selectedLocation) {
                return employee;
            }
            return false;
        }))
    }, [selectedLocation])

    return (
        <div className="flex flex-col gap-4 w-full h-full ">
            <Select
                className="w-[400px]"
                placeholder="Selecciona"
                onChange={(e) => {
                    setSelectedLocation(Number(e))
                }}
                defaultSelectedKey={0}
            >
                <Select.Trigger className={"w-1/2"}>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        <ListBox.Item key={0} id={0} textValue={"Todas"}>
                            Todas
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        {
                            locations.map(loc => {
                                return (
                                    <ListBox.Item key={loc.locationId} id={loc.locationId} textValue={loc.locationName}>
                                        {loc.locationName}
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                )
                            })
                        }
                    </ListBox>
                </Select.Popover>
            </Select>
            <div className="flex flex-wrap gap-4 h-full">
                {filteredEmployees.map((employee: Employee) => {
                    if (employee.employeePhotoUrl && employee.employeePhotoUrl.trim() !== '') {
                        return (
                            <Link key={employee.employeeId} href={`/dashboard/employees/${employee.employeeId}`} >
                                <EmployeePhotoCard employee={employee} />
                            </Link>
                        )
                    } else {
                        return (
                            <Link key={employee.employeeId} href={`/dashboard/employees/${employee.employeeId}`}>
                                <EmployeeCard employee={employee} />
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}