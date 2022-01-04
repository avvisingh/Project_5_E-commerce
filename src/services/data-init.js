import firestore from "./firebase";

/* Function here will: 
  - Check to see if there are already products stored on the database
    - If there are products in database, don't add anything
    - If there are no products, dump init product-set
*/
export const initProducts = [
    {
        title: "Gaming PC",
        price: "2500",
        imageURL:
            "https://cdn1.dotesports.com/wp-content/uploads/2021/07/08151715/Skytech.png",
        quantity: 25,
        favourited: false,
        variants: ["white", "black"],
    },
    {
        title: "Gaming Monitor",
        price: "400",
        imageURL:
            "https://cdn.vox-cdn.com/thumbor/6JJZ1Ue8lkK-ZaeAqtvMqKVeupA=/0x0:1800x1200/1200x800/filters:focal(756x456:1044x744)/cdn.vox-cdn.com/uploads/chorus_image/image/67341716/asusreflex.0.jpg",
        quantity: 40,
        favourited: false,
        variants: ["black"],
    },
    {
        title: "Gaming Keyboard",
        price: "400",
        imageURL:
            "https://www.howtogeek.com/wp-content/uploads/2021/09/header-razer-huntsman-credit-razer.jpg?width=720&height=450&fit=crop&trim=2,2,2,2&fit=crop",
        quantity: 15,
        favourited: false,
        variants: ["black", "white", "stone"],
    },
    {
        title: "Streaming Microphone",
        price: "250",
        imageURL:
            "https://www.popsci.com/uploads/2021/08/22/Blue-Yeti-best-streaming-microphones.jpg?auto=webp",
        quantity: 10,
        favourited: false,
        variants: ["black", "white"],
    },
    {
        title: "Streaming Webcam",
        price: "200",
        imageURL:
            "https://cdn.mos.cms.futurecdn.net/YK3VRWYBjdSCqg6JmtWwuK.jpg",
        quantity: 28,
        favourited: false,
        variants: ["black", "white"],
    },
    {
        title: "Deskpad",
        price: "75",
        imageURL: "https://www.reviewgeek.com/p/uploads/2018/05/16b196b1.png",
        quantity: 56,
        favourited: false,
        variants: ["black", "white", "dark green"],
    },
    {
        title: "Neon Decoration",
        price: "125",
        imageURL:
            "https://images-fe.ssl-images-amazon.com/images/I/61UxU1mNt7S._AC_UL210_SR210,210_.jpg",
        quantity: 32,
        favourited: false,
        variants: ["As Shown"],
    },
    {
        title: "Dual Monitor Arm",
        price: "90",
        imageURL:
            "https://www.kensington.com/siteassets/blog/2019/03---march/monitor-arms-simplified-blog-image-1.jpg?width=1000&height=667",
        quantity: 12,
        favourited: false,
        variants: ["black"],
    },
    {
        title: "Gaming Mouse",
        price: "145",
        imageURL: "https://i.insider.com/5e3af66f5bc79c73363408e3?width=700",
        quantity: 40,
        favourited: false,
        variants: ["black", "white"],
    },
    {
        title: "PC Stereo System",
        price: "220",
        imageURL:
            "https://cdn.luxe.digital/media/2020/09/30093930/best-computer-speakers-luxe-digital.jpg",
        quantity: 58,
        favourited: false,
        variants: ["black", "white", "wood"],
    },
];

export const dataInit = (collectionName) => {
    initProducts.forEach((object) => {
        firestore.collection(collectionName).doc(object.title).set(object);
        console.log("Successfully adding to db");
    });
};
