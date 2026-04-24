import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import Link from "next/link";
import ManagerCard from "./_components/ManagerCard";


const ManagersPage = async () => {
  const res = await fetch(`${API_URL}/managers`, {
    headers: await AuthHeaders(),
    next: {
      tags: ['dashboard:managers']
    }
  })

  const data: Manager[] = await res.json();

  return (
    null
  )
}

export default ManagersPage;