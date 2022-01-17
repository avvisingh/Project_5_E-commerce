import firestore from "./firebase";

export const readAll = async () => {
    const returnedItems = await firestore.collection("products").get();

    let returnedItemsArray = [];
    returnedItems.forEach((item) => returnedItemsArray.push(item.data()));
    return returnedItemsArray;
};

export const readOne = async (productTitle) => {
    let returnedItem = await firestore
        .collection("products")
        .where("title", "==", productTitle)
        .get();
    console.log(returnedItem[0].data());
    return returnedItem;
};
