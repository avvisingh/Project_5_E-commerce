import styles from "./ProductCard.module.scss";

const ProductCard = ({ data }) => {
    return (
        <div className={styles["card-container"]}>
            <img src={data.imageURL} className={styles["card-image"]}></img>
            <h4>{data.title}</h4>
            <h4>{data.price}</h4>
            <h5>{data.variants[0]}</h5>
            <h6>{data.favourited}</h6>
        </div>
    );
};

export default ProductCard;
