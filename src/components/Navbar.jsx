import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarLink = ({ href, label, ariaLabel, onClick }) => (
  <a
    className="navbar-link"
    href={href}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {label}
  </a>
);

const Logo = () => (
  <a href="#home" aria-label="Home" className="flex items-center">
    <motion.div
      className="flex justify-start items-center grow basis-0"
      whileHover={{ scale: 1.05 }}
    >
      <div className="mr-2 text-6xl">
        <img className="w-16 h-16 scale-150" src="/logo.png" alt="Fade Media Logo" />
      </div>
      <span className="text-3xl font-bold hidden sm:block">Fade Media</span>
    </motion.div>
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
        className="bg-merino flex flex-col mt-16 lg:hidden absolute top-4 left-0 z-50 w-full items-center gap-10 pb-10 border-y border-solid pt-10"
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
        <a
          className="custom-button-colored w-40 sm:w-40 h-12 mr-0 sm:mr-4 lg:mr-4 mb-2 sm:mb-0"
          href="#contact"
        >
          Contact Us
        </a>
      </motion.div>
    )}
  </AnimatePresence>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarLinks = [
    { label: "Home", href: "#home", ariaLabel: "Home" },
    { label: "About", href: "#features", ariaLabel: "About" },
    { label: "Testimonials", href: "#feedback", ariaLabel: "Our Work" },
    { label: "FAQ", href: "#FAQ", ariaLabel: "FAQ" },
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
      className={`w-full h-20 flex flex-col justify-center items-center fixed bg-merino z-40 backdrop-blur-3xl shadow-md ${"translate-y-0"}`}
    >
      <div className="2xl:w-[1380px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <Logo />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full mr-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <NavbarLink
                key={label}
                label={label}
                href={href}
                ariaLabel={ariaLabel}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a
              className="custom-button-colored sm:w-40 h-12 mr-0 sm:mr-4 lg:mr-4 mb-2 sm:mb-0"
              href="#contact"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
        <div
          className={`text-YourColor lg:backdrop-blur-xl lg:hidden flex flex-col px-2 py-2 mx-2 border-solid border border-zinc-400 rounded-md cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes size={20} color="text-zinc-950" />
          ) : (
            <FaBars size={20} color="text-zinc-900" />
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
