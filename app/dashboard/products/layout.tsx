import { API_URL } from "@/constants";
import { Product, Provider } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import FilteredProducts from "./_components/FilteredProducts";
import styles from "./page.module.css";

const ProductsLayout = async ({ children }: { children: React.ReactNode }) => {
    const products: Product[] = await fetch(`${API_URL}/products`, {
        headers: await AuthHeaders(),
        next: {
            tags: ['dashboard:products']
        }
    }).then(res => res.json())
        .catch(err => {
            console.log(err);
            return [];
        });

    const providers: Provider[] = await fetch(`${API_URL}/providers`, {
        headers: await AuthHeaders(),
        next: {
            tags: ['dashboard:providers']
        }
    }).
        then(res => res.json())
        .catch(err => {
            console.log(err);
            return [];
        });

    return (
        <div className="flex flex-col h-[90vh] items-center w-full gap-6 p-10">
            <h1 className="text-2xl font-bold">Productos</h1>
            <div className={styles.mainGrid}>
                <FilteredProducts products={products} providers={providers} />
                <div className="flex flex-col items-center">
                    {children}
                </div>
            </div>
        </div >
    )
}

export default ProductsLayout;