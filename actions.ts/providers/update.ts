"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProvider(providerId: string, formData: FormData) {
  let provider: any = {};

  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (!value) continue;
    provider[key] = value;
  }

  const response = await fetch(`${API_URL}/providers/${providerId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(provider),
  });

  if (response.ok) {
    revalidateTag("dashboard:providers", "max");
    revalidateTag(`dashboard:providers:${providerId}`, "max");
    redirect(`/dashboard/providers/${providerId}`);
  }
}
