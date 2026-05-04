"use server";

import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createEmployee(formData: FormData) {
  let employee: any = {};

  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (!value) continue;
    employee[key] = value;
  }

  const response = await fetch(`${API_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(employee),
  });

  const data: Employee = await response.json();

  if (response.ok) {
    revalidateTag("dashboard:employees", "max");
    redirect(`/dashboard/employees/${data.employeeId}`);
  }
}
