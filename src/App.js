import "./assets/css/App.css";
import ShoesStore from "./components/ShoesStore";

function App() {
  return (
    <div className="container flex mx-auto py-5 justify-end App">
      <div className="flex flex-col w-1/4 justify-center fixed left-0 top-1/2">
        <button className="px-5 text-left border border-blue-500 hover:border-blue-500 active:border-blue-500">
          Home
        </button>
        <button className="px-5 text-left border border-transparent hover:border-blue-500 active:border-blue-500">
          Cart
        </button>
      </div>

      <div className="w-3/4 px-10 border border-blue-500 pb-10">
        <h1 className="text-center text-3xl my-5 font-thin">Shoes Shop</h1>
        <ShoesStore />
      </div>
    </div>
  );
}

export default App;
