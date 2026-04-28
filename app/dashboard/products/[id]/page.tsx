import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import UpdateProduct from "./_components/UpdateProduct";
import { Card, Link, Separator } from "@heroui/react";
import { Box, TagDollar, Trolley } from "@gravity-ui/icons";
import DeleteProduct from "./_components/DeleteProduct";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const res = await fetch(`${API_URL}/products/${id}`, {
        headers: await AuthHeaders(),
        next: {
            tags: ['dashboard:products', `dashboard:products:${id}`]
        }
    });
    const product: Product = await res.json();
    return (
        <div className="flex gap-6">
            <ProductCard product={product} />
            <UpdateProduct product={product} />
        </div>
    )
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card className="min-w-[300px] w-fit h-full">
            <Card.Header>
                <Card.Title>{product.productName}</Card.Title>
            </Card.Header>
            <Separator />
            <Card.Content>
                <div className="h-full">
                    <div className="flex items-center gap-2">
                        <TagDollar />
                        <p>${product.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Box />
                        {product.countSeal}
                    </div>
                    {
                        product.provider ? (
                            <div className="flex items-center gap-2">
                                <Trolley />
                                <Link href={`/dashboard/providers/${product.provider.providerId}`}>
                                    {product.provider.providerName}
                                </Link>
                                {/* {product.provider.providerName} */}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Trolley />
                                Sin proveedor
                            </div>
                        )
                    }
                </div>
                <DeleteProduct product={product} />
            </Card.Content>
        </Card>
    )
}