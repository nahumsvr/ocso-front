"use server";

import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createManager(formData: FormData) {
  let manager: any = {};

  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (!value) continue;
    if (key === "location") {
      const locationId = Number(value);
      if (locationId !== 0) {
        manager[key] = locationId;
      }
    } else {
      manager[key] = value;
    }
  }

  console.log(manager);
  const response = await fetch(`${API_URL}/managers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(manager),
  });

  const data: Manager = await response.json();
  console.log(data);

  if (response.ok) {
    revalidateTag("dashboard:managers", "max");
    revalidateTag(`dashboard:managers:${data.managerId}`, "max");
    redirect(`/dashboard/managers/${data.managerId}`);
  } else {
    redirect(`/dashboard/managers`);
  }
}
