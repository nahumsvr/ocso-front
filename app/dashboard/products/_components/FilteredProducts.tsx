"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import { Product } from "@/entities";
import { Input } from "@heroui/react";
import { useState } from "react";

export default function FilteredProducts({ products }: { products: Product[] }) {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    return (
        <div className="flex flex-col gap-6 items-center h-full min-h-0" >
            <Input
                placeholder="Buscar productos"
                onChange={(e) => setFilteredProducts(products.filter((product) => {
                    return product.productName.toLowerCase().includes(e.target.value.toLowerCase())
                }))}
            />
            <div className="flex flex-col flex-1 min-h-0 overflow-y-auto gap-6 w-full">
                {
                    filteredProducts.map((product) => (
                        <Link key={product.productId} href={`/dashboard/products/${product.productId}`}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                }
            </div>
        </ div>
    )
}