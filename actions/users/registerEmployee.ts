"use server";

import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { redirect } from "next/navigation";

export async function registerEmployee(employeeId: string, formData: FormData) {
  let data = {
    userEmail: formData.get("userEmail"),
    userPassword: formData.get("userPassword"),
    userRoles: ["Employee"],
  };

  console.log("Employee ID: ", employeeId);
  console.log("Data: ", data);

  const response = await fetch(
    `${API_URL}/auth/register/${employeeId}/employee`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await AuthHeaders()),
      },
      body: JSON.stringify(data),
    },
  );

  const responseData: Employee = await response.json();

  console.log("Response Data: ", responseData);
  redirect(`/dashboard/employees/${employeeId}`);
}
