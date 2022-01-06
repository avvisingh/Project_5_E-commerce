import ProductCard from "../Components";
import { readAll } from "../services/firebase-utils";
import { useEffect, useState } from "react";

const ProductsGrid = () => {
    let [productsToRender, setProductsToRender] = useState([]);

    useEffect(
        () =>
            (async () => {
                let productsArray = await readAll();

                setProductsToRender(productsArray);
            })(),
        []
    );

    let renderList = productsToRender.map((product) => {
        return <ProductCard data={product} />;
    });

    return (
        <div>
            <h1>Products will display here</h1>
            <div>{renderList}</div>
        </div>
    );
};

export default ProductsGrid;
