"use server";

import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateEmployee(employeeId: string, formData: FormData) {
  formData.delete("$ACTION_REF_1");
  formData.delete("$ACTION_1:0");
  formData.delete("$ACTION_1:1");

  const response = await fetch(`${API_URL}/employees/${employeeId}`, {
    method: "PATCH",
    headers: await AuthHeaders(),
    body: formData,
  });

  const data: Employee = await response.json();

  if (response.ok) {
    revalidateTag("dashboard:employees", "max");
    revalidateTag(`dashboard:employees:${data.employeeId}`, "max");
    redirect(`/dashboard/employees/${data.employeeId}`);
  }
}
