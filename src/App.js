import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./page/navbar/header";
import { Footer } from "./page/footer/footer";
import { Calculator } from "./page/calculator/calculator";
import { Ingredient } from "./page/ingredient/ingredient";
import { Homepage } from "./page/homepage/homepage";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" exact element= {<Homepage />}/> 
            <Route path="/Calculator" exact element= {<Calculator />}/>
            <Route path="/Ingredient" exact element= {<Ingredient />}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
