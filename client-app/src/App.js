import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-green-200">
        <div className="flex flex-wrap ml-10 relative">
          <div className="container max-w-sm bg-orange-300 rounded shadow-xl m-12">
            <div className="h-44 overflow-hidden rounded-t">
              <img
                className="w-full rounded-t -mt-5"
                src="/mesjid.png"
                alt=""
              ></img>
            </div>
            <div className="flex justify-center px-5 -mt-24 mb-5">
              <span className="block h-44 w-44">
                <img
                  className="mx-auto object-cover rounded-full bg-white p-1.5"
                  src="/profileMe.JPG"
                  alt=""
                ></img>
              </span>
            </div>

            <div className="px-7 mb-8 overflow-hidden">
              <h1 className="text-8x1 font-bold text-green-800 text-center">
                Selamat latihan after graduates
              </h1>
              <h1 className="text-[35px] uppercase font-bold text-green-800 text-center">
                miqdad abdurrohman
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
