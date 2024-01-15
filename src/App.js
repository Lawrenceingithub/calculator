import "./App.css";
import { Header } from "./page/navbar/header";
import { Footer } from "./page/footer/footer";
import { Calculator } from "./page/calculator/calculator";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="calculator">
        <Calculator/>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
