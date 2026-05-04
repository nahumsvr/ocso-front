"use server";

import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createManager(formData: FormData) {
  let manager: any = {};
  let locationLatLong = [0, 0];

  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (!value) continue;
    if (key === "latitude") {
      locationLatLong[0] = Number(value);
    } else if (key === "longitude") {
      locationLatLong[1] = Number(value);
    } else {
      manager[key] = value;
    }
  }

  manager.locationLatLong = locationLatLong;

  const response = await fetch(`${API_URL}/managers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(manager),
  });

  const data: Manager = await response.json();

  if (response.ok) {
    revalidateTag("dashboard:managers", "max");
    redirect(`/dashboard?manager=${data.managerId}`);
  }
}
