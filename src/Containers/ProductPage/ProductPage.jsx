import { readOne } from "../../services/firebase-utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    let [productInfo, setProductInfo] = useState({});
    let { productID } = useParams();

    let productTitle = productID.replace("%20", " ");

    console.log(productTitle);

    useEffect(() => {
        async () => {
            let productReturn = await readOne(productTitle);
            setProductInfo(productReturn);
            console.log(productReturn);
        };
    }, []);

    console.log(productInfo);
    return (
        <div className={styles["containerz"]}>
            <img src={productInfo.imageURL}></img>
            <h4>{productInfo.title}</h4>
            <h4>{productInfo.price}</h4>
            <h5>{productInfo.variants[0]}</h5>
            <h6>{productInfo.favourited}</h6>
        </div>
    );
};

export default ProductPage;
