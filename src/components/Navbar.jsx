import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import FadeLogo from "../assets/logo.webp";

const NavbarLink = ({ href, label, ariaLabel, onClick }) => (
  <a
    className="navbar-link flex items-center"
    href={href}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {label}
  </a>
);

const Logo = () => (
  <a href="#home" aria-label="Home" className="flex items-center md:hidden">
    <img
      className="w-[3.5rem] h-[3.5rem] md:w-16 md:h-16"
      src={FadeLogo.src}
      alt="Fade Media Logo"
    />
  </a>
);

const MobileMenu = ({ isOpen, links, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        className="navbar flex flex-col mt-16 md:hidden absolute top-4 left-0 z-50 w-full items-center gap-10 pb-10 border-y border-solid pt-10 bg-black"
      >
        {links.map(({ label, href, ariaLabel }) => (
          <NavbarLink
            key={href}
            label={label}
            href={href}
            ariaLabel={ariaLabel}
            onClick={onClose}
          />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarLinks = [
    { label: "Home", href: "#", ariaLabel: "Home" },
    { label: "Services", href: "#services", ariaLabel: "Services" },
    { label: "FAQ", href: "#faq", ariaLabel: "FAQ" },
    { label: "Contact us", href: "#contact", ariaLabel: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHidden(currentScrollPos > prevScrollPos && currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);

      // Close the mobile nav when scrolling
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isOpen]);

  return (
    <nav
      className={`w-full h-20 flex flex-col justify-center items-center fixed z-40 duration-300 navbar ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between md:justify-center items-center w-full px-5 md:px-0 font-MerriweatherSans">
        <Logo />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden absolute top-2 left-0 right-0 md:flex items-center justify-center space-x-16">
            <ul className="flex items-center space-x-12 lg:flex font-MerriweatherSans">
              <li>
                <a
                  href="/"
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-darkpastelblue"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  aria-label="Services"
                  title="Services"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-darkpastelblue"
                >
                  Services
                </a>
              </li>
            </ul>
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <img
                src={FadeLogo.src}
                className="w-16 h-16"
                alt="Fade Media Logo"
              />
            </a>
            <ul className="flex items-center space-x-12 lg:flex">
              <li>
                <a
                  href="/#faq"
                  aria-label="FAQ"
                  title="FAQ"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-darkpastelblue"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  aria-label="Contact"
                  title="Contact"
                  className="font-medium tracking-wide transition-colors duration-500 hover:text-darkpastelblue"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        <div
          className={`text-xs md:backdrop-blur-xl md:hidden flex flex-col px-2 py-2 mx-2 border-solid border border-zinc-400 rounded-md cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes size={20} color="white" />
          ) : (
            <FaBars size={20} color="white" />
          )}
        </div>
      </div>
      <MobileMenu
        isOpen={isOpen}
        links={navbarLinks}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
};
