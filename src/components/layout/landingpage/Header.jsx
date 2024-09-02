import { useState, useEffect } from "react";
import ListMenu from "../../fragmen/Navigation/ListMenu.jsx";
import "./Header.css"

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isTop = scrollTop < 20; // Ubah nilai ini sesuai kebutuhan

            setIsScrolled(!isTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const home = {
        listname: "Home",
        listlink: "/",
    };
    const about = {
        listname: "About",
        listlink: "#aboutpages",
    };
    const contact = {
        listname: "Contact",
        listlink: "#contactpages",
    };
    const projects = {
        listname: "Projects",
        listlink: "#projectpages",
    };

    return (
        <div
            className={`w-full h-12 flex items-center fixed top-0 z-10 transition-all ${isScrolled ? "bg-slate-950" : "bg-transparent"
                }`}
        >
            <h3 className=" font-bold flex justify-center text-xl w-1/5">
                My Web
            </h3>
            <div className="w-3/5 flex items-center justify-center">
                <ul className="h-10 flex items-center">
                    <ListMenu {...home} />
                    <ListMenu {...about} />
                    <ListMenu {...contact} />
                    <ListMenu {...projects} />
                </ul>
            </div>
            <div className="w-1/5 flex justify-center">
                <img className="size-9 max-md:size-6" src="/github (1).svg" alt="" />
            </div>
        </div>
    );
}

export default Header;
