import { initProducts, dataInit } from "./services/data-init";
import ProductsGrid from "./Containers";

function App() {
    dataInit("products");
    return (
        <div className="App">
            <h1>Avvi's Gaming Setup Store</h1>
            <ProductsGrid />
        </div>
    );
}

export default App;
