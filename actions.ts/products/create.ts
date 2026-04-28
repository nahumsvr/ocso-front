"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  let product: any = {};

  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (!value) continue;
    product[key] = value;
  }

  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(await AuthHeaders()),
    },
    body: JSON.stringify(product),
  });

  if (response.ok) {
    revalidateTag("dashboard:products", "max");
    redirect(`/dashboard/products`);
  }
}
