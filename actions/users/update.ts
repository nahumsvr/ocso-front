"use server";

import { API_URL } from "@/constants";
import { Employee, User } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateEmployee(employee: Employee, formData: FormData) {
  let data = {
    userEmail: formData.get("userEmail") ?? undefined,
    userPassword: formData.get("userPassword") ?? undefined,
    // userRoles: ["Employee"],
  };

  console.log("Employee ID: ", employee.user.userId);
  console.log("Data: ", data);

  const response = await fetch(`${API_URL}/auth/${employee.user.userId}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(data),
  });

  const responseData: Employee = await response.json();

  console.log("Response Data: ", responseData);
  redirect(`/dashboard/employees/${employee.employeeId}`);
}
