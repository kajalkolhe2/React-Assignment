import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <Navbar />
        <HelloWorld />
      </div>
    </>
  );
}

export default App;
