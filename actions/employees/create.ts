"use server";

import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createEmployee(formData: FormData) {
  const response = await fetch(`${API_URL}/employees`, {
    method: "POST",
    headers: await AuthHeaders(),
    body: formData,
  });

  const data: Employee = await response.json();

  if (response.ok) {
    revalidateTag("dashboard:employees", "max");
    redirect(`/dashboard/employees/${data.employeeId}`);
  } else {
    redirect("/dashboard/employees");
  }
}
