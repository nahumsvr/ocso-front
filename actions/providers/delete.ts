"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteProvider(
  providerId: string,
  formData: FormData,
) {
  const provider = formData.get("deleteValue");
  if (!provider) return;

  const res = await fetch(`${API_URL}/providers/${providerId}`, {
    method: "DELETE",
    headers: await AuthHeaders(),
  });

  if (res.ok) {
    revalidateTag("dashboard:providers", "max");
    redirect(`/dashboard/providers`);
  }
}
