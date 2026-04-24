"use server";

import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateLocation(store: string, formData: FormData) {
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

  const response = await fetch(`${API_URL}/locations/${store}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(location),
  });

  const data: Location = await response.json();

  if (response.ok) {
    revalidateTag("dashboard:locations", "max");
    revalidateTag(`dashboard:locations:${data.locationId}`, "max");
    redirect(`/dashboard?store=${data.locationId}`);
  }
}
