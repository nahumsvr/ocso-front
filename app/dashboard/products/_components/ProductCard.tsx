import { Product } from "@/entities";
import { Box, TagDollar, Trolley } from "@gravity-ui/icons";
import { Card, Link, Separator } from "@heroui/react";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="min-w-[300px] w-fit h-full">
            <Card.Header>
                <Card.Title>{product.productName}</Card.Title>
            </Card.Header>
            <Separator />
            <Card.Content>
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
                            {/* <Link href={`/dashboard/providers/${product.provider.providerId}`}>
                                {product.provider.providerName}
                                </Link> */}
                            {product.provider.providerName}
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Trolley />
                            Sin proveedor
                        </div>
                    )
                }
            </Card.Content>
        </Card>
    )
}