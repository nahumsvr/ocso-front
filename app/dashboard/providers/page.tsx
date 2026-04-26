import { API_URL } from "@/constants"
import { Provider } from "@/entities"
import ProviderCard from "./_components/ProviderCard"
import { AuthHeaders } from "@/helpers/authHeaders"
import Link from "next/link"
import CreateProvider from "./[id]/CreateProvider"
import FormCreateProvider from "./[id]/FormCreateProvider"

const ProvierPage = async () => {
  const res = await fetch(`${API_URL}/providers/`, {
    headers: await AuthHeaders()
  })
    .catch((err) => { console.log(err); return null });

  if (!res) return <div>error al obtener proveedores</div>

  const data: Provider[] = await res.json()
  if (!data) return <div>No se encontró el proveedor</div>

  return (
    <div className="flex flex-col w-screen gap-4 p-10">
      <div className="w-full flex justify-end">
        <CreateProvider>
          <FormCreateProvider />
        </CreateProvider>
      </div>
      <div className="flex gap-4 flex-wrap">
        {data.map((p) => (
          <Link
            href={`/dashboard/providers/${p.providerId}`}
            key={p.providerId}
            className="h-fit hover:scale-105 transition-transform"
          >
            <ProviderCard provider={p} />
          </Link>
        ))}
      </div>
    </ div>
  )
}

export default ProvierPage