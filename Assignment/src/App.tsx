import Navbar from "./components/navbar";
import ReactRouting from "./components/routeComponents/ReactRouting";

function App() {
  return (
    <>
      <div className="bg-gray-200 h-fit text-center ">
        <Navbar />
        {/* <HelloWorld />
        <Counter />
        <DataFetcher />
        <RegistrationForm /> */}
        <ReactRouting />
      </div>
    </>
  );
}

export default App;
