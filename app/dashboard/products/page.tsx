import { createProduct } from "@/actions/products/create";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";
import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import SelectProvider from "./_components/SelectProviders";

const ProductsPage = async () => {

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
            <form action={createProduct} className="flex flex-col gap-2 w-full">
                <TextField name="productName" type="text" isRequired>
                    <Label>Nombre</Label>
                    <Input type="text" placeholder="Nombre del producto" />
                    <FieldError>El producto es requerido</FieldError>
                </TextField>
                <TextField name="price" type="number" isRequired>
                    <Label>Precio</Label>
                    <Input type="number" placeholder="$23.10" />
                    <FieldError>El precio es requerido</FieldError>
                </TextField>
                <TextField name="countSeal" type="number" isRequired>
                    <Label>Conteo</Label>
                    <Input type="number" placeholder="100" />
                    <FieldError>El conteo es requerido</FieldError>
                </TextField>
                <SelectProvider providers={providers} />
                <Button type="submit" className="w-full">Crear</Button>
            </form>
        </Card>
    );
}

export default ProductsPage;