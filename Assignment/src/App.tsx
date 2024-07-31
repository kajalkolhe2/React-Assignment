import "./App.css";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <Navbar />
        <HelloWorld />
        <Counter />
      </div>
    </>
  );
}

export default App;
