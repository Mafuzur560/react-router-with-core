import { useLoaderData } from "react-router-dom";
import Product from "../Product";


const Products = () => {

    const { products } = useLoaderData()

    return (
        <div className="grid grid-cols-3 gap-4 space-y-12 mb-6 container mx-auto">
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;