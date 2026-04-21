"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import axios from "axios";

export default async function deleteLocation(formData: FormData) {
  const store = formData.get("deleteValue");
  if (!store) return;

  axios
    .delete(`${API_URL}/locations/${store}`, {
      headers: await AuthHeaders(),
    })
    .then((res) => console.log(res));
}
