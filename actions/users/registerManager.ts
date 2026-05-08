"use server";

import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { redirect } from "next/navigation";

export async function registerManager(
  managerId: string,
  password: string,
  formData: FormData,
) {
  let data = {
    userEmail: formData.get("userEmail"),
    userPassword: password,
    userRoles: ["Manager"],
  };

  const response = await fetch(
    `${API_URL}/auth/register/${managerId}/manager`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await AuthHeaders()),
      },
      body: JSON.stringify(data),
    },
  );

  const responseData: Employee = await response.json();

  console.log("Response Data: ", responseData);
  redirect(`/dashboard/managers/${managerId}`);
}
