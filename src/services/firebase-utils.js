import firestore from "./firebase";

export const readAll = async () => {
    const returnedItems = await firestore.collection("products").get();

    returnedItems.forEach((doc) => console.log(doc.data()));
};
