import Counter from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/navbar";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <div className="bg-gray-200 h-fit text-center m-5">
        <Navbar />
        <HelloWorld />
        <Counter />
        <DataFetcher />
        <RegistrationForm />
      </div>
    </>
  );
}

export default App;
