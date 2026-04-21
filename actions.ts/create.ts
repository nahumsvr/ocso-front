"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

export async function createLocation(formData: FormData) {
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

  const token = (await cookies()).get(TOKEN_NAME)?.value;
  await axios.post(`${API_URL}/locations`, location, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
