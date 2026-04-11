"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import companyLogo from "../../assets/logo.svg";
import Link from "next/link";
import Mobilemenu from "../MobileMenu/Mobilemenu";
import Menu from "../../shared/Menu";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "next-themes";

import { FiSun, FiMoon } from "react-icons/fi";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative">
        <header
          className={`fixed z-50 text-white w-11/12 mx-auto left-0 right-0 transition-all duration-300 rounded-full ${
            scrolled ? "top-4 bg-slate-950 backdrop-blur-xl shadow-2xl border border-white/10" : "top-6 bg-slate-900/95 backdrop-blur-md shadow-md"
          }`}
        >
          <div className="mx-auto pr-8 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <Image src={companyLogo} alt="Logo" className="h-12 font-bold" />
            </Link>

            {/* Desktop Menubar */}
            <nav className="hidden lg:block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <Menu></Menu>
            </nav>
            
            <div className="flex items-center gap-4">
              {mounted && (
                <button
                  aria-label="Toggle Dark Mode"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-2xl hover:text-orange-400 transition-colors"
                >
                  {theme === "dark" ? <FiSun /> : <FiMoon />}
                </button>
              )}



              <a href="https://wa.link/q16322" target="_blank" className="hidden lg:block"><button className="cursor-pointer hover:text-white hover:scale-110 duration-300 rounded-full text-orange-400 text-[28px] mt-1"><FaWhatsapp /></button> </a>

              {/* Mobile Menu Button */}
              <Mobilemenu></Mobilemenu>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;