import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./page/navbar/header";
import { Footer } from "./page/footer/footer";
import { Calculator } from "./page/calculator/calculator";
import { IngredientUpload } from "./page/ingredient/ingredientUpload";
import { Homepage } from "./page/homepage/homepage";
import { Products } from "./page/products/products";
import { IngredientList } from "./page/ingredient/ingredientList";
import { ProductList } from "./page/products/productList";
import { IngredientDetail } from "./page/ingredient/ingredientDetail";

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/IngredientUpload" element={<IngredientUpload />} />
            <Route path="/IngredientList" element={<IngredientList />} />
            <Route path="/Ingredient/:id" element={<IngredientDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
