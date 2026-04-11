"use client";
import Link from "next/link";
import Image from "next/image"
import companyLogo from "../../assets/logo.svg";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <>
        <footer className="grid lg:gap-12 lg:grid-cols-4 bg-slate-950 text-white py-16 px-8 lg:px-20 border-t border-white/5 relative overflow-hidden">
          {/* Subtle glow effect behind footer */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
          <div>
            <nav className="flex flex-col gap-4 items-center my-4">
              <Image src={companyLogo} alt="Logo" />
              <div className="flex gap-4">
                <a className="text-3xl" href="https://www.facebook.com/people/OBLIQA-IT-Solutions/61574924409322/?mibextid=ZbWKwL" target="_blank"><TiSocialFacebook />
                </a>
                <a className="text-3xl" href="https://www.linkedin.com/company/obliqa-it-solutions/" target="_blank"><TiSocialLinkedin />
                </a>
                <a className="text-3xl" href="https://www.instagram.com/obliqa_it_solutions/?igsh=MWlpNTU1b3k5eGtybg%3D%3D#" target="_blank"><TiSocialInstagram />
                </a>
              </div>
            </nav>
          </div>
          <div className="flex flex-col text-gray-300 space-y-3 mb-5">
            <h6 className="text-xl lg:text-2xl font-bold mb-4 text-white uppercase tracking-wider relative inline-block">
              Information
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-brand-primary to-transparent rounded-full"></span>
            </h6>
            <Link className="hover:text-brand-primary transition-colors duration-300" href="/terms-conditions">Terms & Conditions</Link>
            <Link className="hover:text-brand-primary transition-colors duration-300" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-brand-primary transition-colors duration-300" href="/accessibility">Accessibility Statement</Link>
            <Link className="hover:text-brand-primary transition-colors duration-300" href="/ethics-compliance">Ethics & Compliance</Link>
            <a className="link text-md hover:text-brand-primary transition-colors duration-300" href="https://bd.obliqa.com">OBLIQA Bangladesh</a>
          </div>
          <div className="flex flex-col space-y-3 mb-5">
            <h6 className="text-xl lg:text-2xl font-bold mb-4 text-white uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-brand-primary to-transparent rounded-full"></span>
            </h6>
            <div className="text-gray-300 flex flex-col space-y-3">
              <Link className="hover:text-brand-primary transition-colors duration-300" href={'/'}>Home</Link>
              <Link className="hover:text-brand-primary transition-colors duration-300" href={'/about'}>About</Link>
              <Link className="hover:text-brand-primary transition-colors duration-300" href={'/services'}>Services</Link>
              <Link className="hover:text-brand-primary transition-colors duration-300" href={'/portfolio'}>Portfolio</Link>
              <Link className="hover:text-brand-primary transition-colors duration-300" href={'/contact'}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col text-md space-y-4">
            <h6 className="text-xl lg:text-2xl font-bold mb-4 text-white uppercase tracking-wider relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-brand-primary to-transparent rounded-full"></span>
            </h6>
            <p className="text-gray-300 text-xl">
              {" "}
              <span className="font-medium text-white">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "White" }}
                />{" "}
                Address:{" "}
              </span>
              <br />
              Dhaka, Bangladesh
            </p>
            <p className="text-gray-300 text-xl">
              <span className="font-medium text-white">
                <i className="fa-solid fa-phone" style={{ color: "#ffffff" }} />{" "}
                Phone:{" "}
              </span>
              <br /> +880 170 680 3616
            </p>
            <p className="text-gray-300 text-xl">
              <span className="font-medium text-white">
                <i className="fa-solid fa-envelope" style={{ color: "#ffffff" }} />{" "}
                Email:{" "}
              </span>
              <br />
              contact@obliqa.com
            </p>
          </div>
        </footer>
        <div className="footer bg-slate-950 border-t border-white/5 text-gray-400 items-center justify-center py-6 text-sm">
          <aside className="grid-flow-col items-center text-center">
            <p> © 2026 OBLIQA IT Solutions. All rights reserved.</p>
          </aside>
        </div>
      </>

    </div>
  );
};

export default Footer;