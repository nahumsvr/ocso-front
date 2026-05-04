"use server";

import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateManager(managerId: string, formData: FormData) {
  // console.log("managerId", managerId);
  console.log("formData", formData);

  let manager: any = {};

  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (!value) continue;
    manager[key] = value;
  }

  console.log("manager con id:", manager);

  const response = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(manager),
  });

  console.log(response);

  const data: Manager = await response.json();

  if (response.ok) {
    revalidateTag("dashboard:managers", "max");
    revalidateTag(`dashboard:managers:${data.managerId}`, "max");
    redirect(`/dashboard/managers/${data.managerId}`);
  }
}
