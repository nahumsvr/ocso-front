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
    <div className="flex justify-center items-center w-full h-full text-gray-500 text-xl font-medium">
      <h1>Para empezar, seleccione un administrador para ver sus detalles o cree uno nuevo.</h1>
    </div>
  )
}

export default ManagersPage;