"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteEmployee(
  employeeId: string,
  formData: FormData,
) {
  const employee = formData.get("deleteValue");
  if (!employee) return;

  const res = await fetch(`${API_URL}/employees/${employeeId}`, {
    method: "DELETE",
    headers: await AuthHeaders(),
  });

  if (res.ok) {
    revalidateTag("dashboard:employees", "max");
    redirect(`/dashboard/employees`);
  }
}
