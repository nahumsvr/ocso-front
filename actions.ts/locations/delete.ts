"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteLocation(formData: FormData) {
  const store = formData.get("deleteValue");
  if (!store) return;

  const res = await fetch(`${API_URL}/locations/${store}`, {
    method: "DELETE",
    headers: await AuthHeaders(),
  });

  if (res.ok) {
    revalidateTag("dashboard:locations", "max");
    redirect(`/dashboard`);
  }
}
