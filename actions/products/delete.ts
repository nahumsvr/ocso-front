"use server";

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteProduct(
  productId: string,
  formData: FormData,
) {
  const product = formData.get("deleteValue");
  if (!product) return;

  const res = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
    headers: await AuthHeaders(),
  });

  if (res.ok) {
    revalidateTag("dashboard:products", "max");
    redirect(`/dashboard/products`);
  }
}
