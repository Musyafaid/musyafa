import { useState, useEffect } from "react";
import ListMenu from "./common/navigation/ListMenu.jsx";
import "./Header.css";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isTop = scrollTop < 20; 

            setIsScrolled(!isTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const home = { listname: "Home", listlink: "/" };
    const about = { listname: "About", listlink: "#aboutpages" };
    const projects = { listname: "Projects", listlink: "#projectpages" };
    const contact = { listname: "Contact", listlink: "#contact" };

    return (
        <header
            className={`w-screen h-12 fixed top-0 z-10 transition-all ${isScrolled ? "bg-slate-950" : "bg-transparent"} flex items-center justify-between px-4 md:px-8`}
        >
            {/* GitHub Logo - Left */}
     

            {/* Brand - Center */}
            <div className="md:w-1/5  max-md:text-xs max-md:w-screen">
                
            <h3 className="font-bold w-full max-md:flex max-md:justify-center  text-xl hover:text-rose-600 hover:cursor-pointer">
                Musyafa Achmad
            </h3>
            </div>

            {/* Hamburger Icon */}
            <button
                className="md:hidden flex items-center justify-center ml-auto"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    className="w-6 h-6 text-gray-700 hover:text-rose-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <div className={`md:flex ${isMenuOpen ? "flex flex-col max-md:absolute -z-10 top-12 w-screen max-md:right-0"  : "hidden"} ${isScrolled ? "bg-slate-950" : "bg-transparent"} w-full md:w-3/5  md:flex-row md:items-center justify-center`}>
                <ul className="flex w-full justify-center flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                    <ListMenu {...home} />
                    <ListMenu {...about} />
                    <ListMenu {...projects} />
                    <ListMenu {...contact} />
                </ul>
            </div>

            <a href="https://github.com/Musyafaid" className="md:flex w-1/5 hidden flex justify-end">
                <img
                    className="w-8 h-8 grayscale hover:grayscale-0 "
                    src="/github (1).svg"
                    alt="GitHub"
                />
            </a>
        </header>
    );
}

export default Header;
