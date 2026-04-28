"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import { Product, Provider } from "@/entities";
import { Input, Label, ListBox, Select } from "@heroui/react";
import { useEffect, useState } from "react";

export default function FilteredProducts({ products, providers }: { products: Product[], providers: Provider[] }) {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [selectedProvider, setSelectedProvider] = useState<string | undefined>(undefined);
    const [searchInput, setSearchInput] = useState<string>("");

    useEffect(() => {
        setFilteredProducts(products.filter((product) => {
            const filterByInput = product.productName.toLowerCase().includes(searchInput.toLowerCase());
            if (selectedProvider == undefined || selectedProvider == "all") {
                return filterByInput;
            }
            if (product.provider.providerId == selectedProvider) {
                return filterByInput;
            }
            return false;
        }))
    }, [selectedProvider, searchInput])

    return (
        <>
            <div className="flex flex-col gap-6 items-center h-full min-h-0" >
                <Select
                    className="flex justify-center items-center w-full"
                    placeholder="Selecciona"
                    onChange={(e) => setSelectedProvider(e ? e.toString() : undefined)}
                >
                    <Label>Proveedor</Label>
                    <Select.Trigger className={"w-1/2"}>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item key="all" id="all" textValue={"Todos"}>
                                Todos
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            {
                                providers.map(provider => {
                                    return (
                                        <ListBox.Item key={provider.providerId} id={provider.providerId} textValue={provider.providerName}>
                                            {provider.providerName}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    )
                                })
                            }
                        </ListBox>
                    </Select.Popover>
                </Select>
                <Input
                    placeholder="Buscar productos"
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-[65%]"
                />
                <div className="flex flex-col flex-1 min-h-0 overflow-y-auto gap-6">
                    {
                        filteredProducts.length == 0 ? <p className="text-gray-400">No hay productos</p> :
                            filteredProducts.map((product) => (
                                <Link key={product.productId} href={`/dashboard/products/${product.productId}`}>
                                    <ProductCard product={product} />
                                </Link>
                            ))
                    }
                </div>
            </ div>
        </>
    )
}
