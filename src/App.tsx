import { useState } from "react";
import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <nav className="flex   justify-between items-center p-4 text-zinc-700">
      {/* left side  */}

      <h1 className="text-2xl font-extrabold text-zinc-800 tracking-tight ">
        SinDrama
      </h1>

      {/* right side  */}
      <div className="md:inline hidden">
        <ul className="flex gap-x-4 text-zinc-700 font-medium ">
          <li className="text-lg">
            <a href="#"> Home </a>
          </li>
          <li className="text-lg">
            <a href="#"> About </a>
          </li>
          <li className="text-lg">
            <a href="#"> Contact </a>
          </li>
        </ul>
      </div>

      {/* hamburguer menu  */}
      <div className="md:hidden">
        <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <GiHamburgerMenu className=" text-2xl text-zinc-800 " />
        </button>

        {menuIsOpen ? (
          <div className="bg-black w-40 h-40 flex justify-center items-center rounded-md absolute right-4">
            <ul className="flex flex-col gap-y-1 text-zinc-100 font-medium ">
              <li>
                <a href="#"> Home </a>
              </li>
              <li>
                <a href="#"> About </a>
              </li>
              <li>
                <a href="#"> Contact </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className=" flex flex-col text-center pt-20 gap-y-3 h-[80vh]">
      <h1 className="text-7xl font-extrabold text-zinc-800 tracking-tight ">
        Aplasta a tu competencia
      </h1>
      <h1 className="text-2xl font-medium text-zinc-800   ">
        Creamos sitios web hechos a tu medida que ranquean y convierten.
      </h1>

      <h1 className="text-xl font-medium italic text-zinc-800 ">
        Sin piedad con tu competencia.
      </h1>

      <div className="flex justify-center gap-x-8 pt-5">
        <button className="px-3 py-2 bg-zinc-900 text-zinc-100 rounded-md hover:scale-105 active:scale-95 transition-transform duration-300">
          Contáctanos
        </button>
        <button className="px-3 py-2 border border-zinc-700 text-zinc-800 rounded-md  hover:scale-105 active:scale-95 transition-transform duration-300">
          Sobre nosotros
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
