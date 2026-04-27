import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import ProductCard from "../_components/ProductCard";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const res = await fetch(`${API_URL}/products/${id}`, {
        headers: await AuthHeaders(),
        next: {
            tags: ['dashboard:products']
        }
    });
    const product: Product = await res.json();
    return (
        <ProductCard product={product} />
    )
}