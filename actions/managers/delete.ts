"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteManager(
  managerId: string,
  formData: FormData,
) {
  const manager = formData.get("deleteValue");
  if (!manager) return;

  const res = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "DELETE",
    headers: await AuthHeaders(),
  });

  if (res.ok) {
    revalidateTag("dashboard:managers", "max");
    redirect(`/dashboard/managers`);
  }
}
