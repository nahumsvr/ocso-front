import { Product } from "@/entities";
import { Box, TagDollar, Trolley } from "@gravity-ui/icons";
import { Card, Link, Separator } from "@heroui/react";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="min-w-[300px]">
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
            </Card.Content>
        </Card>
    )
}