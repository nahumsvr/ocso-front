import { API_URL } from "@/constants"
import { Provider } from "@/entities"
import ProviderCard from "../_components/ProviderCard"
import { AuthHeaders } from "@/helpers/authHeaders"
import ProductCard from "./_components/ProductCard"
import Link from "next/link"
import UpdateProviderForm from "./_components/UpdateProviderForm"

const ProvierPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const provider = await fetch(`${API_URL}/providers/${id}`, {
        headers: await AuthHeaders(),
        next: {
            tags: [`dashboard:providers:${id}`],
        }
    })
        .catch((err) => { console.log(err); return null });

    if (!provider) return <div>No se encontró el proveedor</div>

    const data: Provider = await provider.json();
    console.log(data);

    if (!data) return <div>No se encontró el proveedor</div>

    return (
        <div className="flex flex-col gap-4 items-center w-full p-10">
            <div className="flex gap-4">
                <ProviderCard provider={data} />
                <UpdateProviderForm provider={data} />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <h2 className="font-bold text-lg">Productos del proveedor</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                    {data?.products?.map((product) => (
                        <Link
                            href={`/dashboard/products/${product.productId}`}
                            className="hover:scale-105 transition-transform"
                            key={product.productId}
                        >
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProvierPage