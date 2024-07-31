import "./App.css";
import Counter from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="bg-gray-200 h-fit">
        <Navbar />
        <HelloWorld />
        <Counter />
        <DataFetcher />
      </div>
    </>
  );
}

export default App;
