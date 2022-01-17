import ProductCard from "../Components";
import { readAll } from "../services/firebase-utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductsGrid.module.scss";

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
        return (
            <Link to={product.title}>
                <ProductCard data={product} />
            </Link>
        );
    });

    return <div className={styles["container"]}>{renderList}</div>;
};

export default ProductsGrid;
