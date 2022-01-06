import firestore from "./firebase";

export const readAll = async () => {
    const returnedItems = await firestore.collection("products").get();

    let returnedItemsArray = [];
    returnedItems.forEach((item) => returnedItemsArray.push(item.data()));
    return returnedItemsArray;
};
