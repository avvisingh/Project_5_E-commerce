import { initProducts, dataInit } from "./services/data-init";

function App() {
    dataInit("products");
    return (
        <div className="App">
            <h1>Avvi's Gaming Setup Store</h1>
        </div>
    );
}

export default App;
