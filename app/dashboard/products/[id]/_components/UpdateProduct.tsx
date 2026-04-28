import { updateProduct } from "@/actions.ts/products/update";
import { Product, Provider } from "@/entities";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";
import SelectProvider from "../../_components/SelectProviders";
import { AuthHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";

export default async function UpdateProduct({ product }: { product: Product }) {
    const id = product.productId;
    const updateProductByid = updateProduct.bind(null, id)

    const providers: Provider[] = await fetch(`${API_URL}/providers`, {
        headers: await AuthHeaders(),
        next: {
            tags: ["dashboard:providers"]
        }
    })
        .then((res) => (res.ok ? res.json() : []))
        .catch(() => []);

    return (
        <Card className="max-w-lg min-w-md w-full">
            <form action={updateProductByid} className="flex flex-col gap-2 w-full">
                <TextField name="productName" type="text" isRequired>
                    <Label>Nombre</Label>
                    <Input type="text" placeholder="Nombre del producto" value={product.productName} />
                    <FieldError>El producto es requerido</FieldError>
                </TextField>
                <TextField name="price" type="number" isRequired>
                    <Label>Precio</Label>
                    <Input type="number" placeholder="$23.10" value={product.price} />
                    <FieldError>El precio es requerido</FieldError>
                </TextField>
                <TextField name="countSeal" type="number" isRequired>
                    <Label>Conteo</Label>
                    <Input type="number" placeholder="100" value={product.countSeal} />
                    <FieldError>El conteo es requerido</FieldError>
                </TextField>
                <SelectProvider providers={providers} defaultValue={product.provider?.providerId} />
                <Button type="submit" className="w-full">Actualizar</Button>
            </form>
        </Card>
    )
}