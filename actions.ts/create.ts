"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import axios from "axios";

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

  await axios.post(`${API_URL}/locations`, location, {
    headers: await AuthHeaders(),
  });
}
