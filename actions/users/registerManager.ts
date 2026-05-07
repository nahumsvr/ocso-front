"use server";

import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function registerManager(managerId: string, formData: FormData) {
  let data: any = {};

  data.userEmail = formData.get("userEmail");
  data.password = formData.get("password");
  data.userRoles = formData.get("userRoles");

  const response = await fetch(`${API_URL}/auth/register?role=manager`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(data),
  });

  const responseData: Employee = await response.json();

  if (response.ok) {
    revalidateTag("dashboard:employees", "max");
    redirect(`/dashboard/employees/${responseData.employeeId}`);
  } else {
    redirect("/dashboard/employees");
  }
}
