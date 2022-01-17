import "./App.css";
import { dataInit } from "./services/data-init";
import { readAll, readOne } from "./services/firebase-utils";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductsGrid from "./Containers";
import ProductCard from "./Components";
import ProductPage from "./Containers/ProductPage/ProductPage";

function App() {
    dataInit("products");
    readOne("Deskpad");
    return (
        <div className="App">
            <h1>Avvi's Gaming Setup Store</h1>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <ProductsGrid />
                    </Route>
                    <Route exact path="/:productID">
                        <ProductPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
