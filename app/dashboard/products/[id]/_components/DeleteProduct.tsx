"use client";

import { TrashBin, TriangleExclamation } from "@gravity-ui/icons";
import { Button, Input, Modal } from "@heroui/react";
import { Product } from "@/entities";
import deleteProduct from "@/actions.ts/products/delete";

export default function DeleteProduct({ product }: { product: Product }) {
    return (
        <Modal>
            <Button variant="danger">
                <TrashBin />
                Eliminar
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <TriangleExclamation className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Atención</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="flex flex-col gap-4">
                            <div>¿Estás seguro de eliminar el producto {product.productName}?</div>
                            <DeleteProductForm productId={product.productId} />
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

const DeleteProductForm = ({ productId }: { productId: string }) => {

    const deleteAction = deleteProduct.bind(null, productId);
    return (
        <form action={deleteAction}>
            <Input type="hidden" name="deleteValue" value={productId} />
            <Button type="submit" className="w-full" variant="danger">
                <TrashBin />
                Eliminar
            </Button>
        </form>
    )
}