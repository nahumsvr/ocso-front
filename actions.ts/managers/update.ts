"use server";

import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateManager(manager: string, formData: FormData) {
  let location: any = {};
  let locationLatLong = [0, 0];

  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (!value) continue;
    if (key === "latitude") {
      locationLatLong[0] = Number(value);
    } else if (key === "longitude") {
      locationLatLong[1] = Number(value);
    } else {
      location[key] = value;
    }
  }
  location.locationLatLong = locationLatLong;

  const response = await fetch(`${API_URL}/managers/${manager}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(location),
  });

  const data: Manager = await response.json();

  if (response.ok) {
    revalidateTag("dashboard:managers", "max");
    revalidateTag(`dashboard:managers:${data.managerId}`, "max");
    redirect(`/dashboard?manager=${data.managerId}`);
  }
}
