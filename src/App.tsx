import { useState } from "react";
import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <nav className="flex  justify-between items-center px-4 py-2 text-zinc-700">
      {/* left side  */}
      <div className="text-2xl font-extrabold text-zinc-800 ">
        <img src="/B.png" className="w-10" alt="" />
      </div>

      {/* right side  */}
      <div className="md:inline hidden">
        <ul className="flex gap-x-4 text-zinc-700 font-medium ">
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

      {/* hamburguer menu  */}
      <div className="md:hidden">
        <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <GiHamburgerMenu className=" text-2xl text-zinc-800 " />
        </button>

        {menuIsOpen ? loca(
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

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
