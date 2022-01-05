import { dataInit } from "./services/data-init";
import { readAll } from "./services/firebase-utils";
import ProductsGrid from "./Containers";

function App() {
    dataInit("products");
    readAll();
    return (
        <div className="App">
            <h1>Avvi's Gaming Setup Store</h1>
            <ProductsGrid />
        </div>
    );
}

export default App;
