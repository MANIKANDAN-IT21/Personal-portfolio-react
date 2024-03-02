import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaSquareInstagram } from "react-icons/fa6";
import { useState } from "react";
const First = () => {
  const [togglemenu, setstate] = useState(false);
  return (
    <first
      className=" flex justify-around backfirst text md:flex-row  font-hero"
      id=""
    >
      <h1 className="text-2xl py-3 ">Manikandan</h1>
      <nav className="hidden md:block ">
        <ul className="flex">
          <li className="flex hover:text-white">
            <a href="/">Home</a>
          </li>
          <li className="flex hover:text-white">
            <a href="#bio">Biography</a>
          </li>
          <li className="flex hover:text-white">
            <a href="#achievements">Achievements</a>
          </li>
          <li className="flex hover:text-white">
            <a href="#project">Project</a>
          </li>
          <li className="flex hover:text-white">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
      <nav className="hidden md:block ">
        {" "}
        <div className="flex logo pr-5 ">
          <a
            className="pr-5 hover:text-white"
            href=" https://www.linkedin.com/in/manikandan-k1/"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            className="pr-5 hover:text-white"
            href="https://github.com/MANIKANDAN-IT21"
          >
            <FaGithub size={25} />
          </a>
          <a
            className="pr-5 hover:text-white"
            href="https://www.instagram.com/manikamaraj_?igsh=M2J3czllZmh1bHNs"
          >
            <FaSquareInstagram size={25} />
          </a>
        </div>
      </nav>

      {togglemenu && (
        <nav className="block md:hidden mbbar">
          <ul
            onClick={() => setstate(!togglemenu)}
            className="flex flex-col text-white"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#bio">Biography</a>
            </li>
            <li>
              <a href="#achievements">Achievement</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#resume">resume </a>
            </li>
          </ul>
        </nav>
      )}
      <button onClick={() => setstate(!false)} className="block md:hidden">
        <Bars3Icon className="text-whilte h-5" />
      </button>
    </first>
  );
};
export default First;
