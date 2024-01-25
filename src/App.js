import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import Slider from "./component/Slider/Slider";
import Virtual from "./component/Virtual/Virtual";
import Product from "./component/Product/Product";
import Section from "./component/Section/Section";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Slider />
      <Virtual />
      <Product />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
