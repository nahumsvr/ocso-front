import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import FilteredProducts from "./_components/FilteredProducts";
import styles from "./page.module.css";

const ProductsPage = async () => {
    const res = await fetch(`${API_URL}/products`, {
        headers: await AuthHeaders(),
        next: {
            tags: ['dashboard:products']
        }
    });
    const products: Product[] = await res.json();
    return (
        <div className="flex flex-col h-[90vh] overflow-hidden items-center w-full gap-6 p-10">
            <h1 className="text-2xl font-bold">Productos</h1>
            <div className={styles.mainGrid}>
                <FilteredProducts products={products} />
                <div>
                    lol
                </div>
            </div>
        </div >
    )
}

export default ProductsPage;