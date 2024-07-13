import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo01-removebg-preview.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="container mx-auto">
      <div
        className={`navbar ${
          isScrolled ? "bg-white shadow-lg" : "bg-base-100"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isDropdownOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h8m-8 6h16"
                  }
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-40 mt-3 w-52 p-2 gap-2 shadow"
                onClick={closeDropdown}
              >
                <li>
                  <NavLink to="/" activeClassName="text-blue-500">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/interior" activeClassName="text-blue-500">
                    Interior
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/steel-building" activeClassName="text-blue-500">
                    Steel Building
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/construction" activeClassName="text-blue-500">
                    Construction
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/real-estate" activeClassName="text-blue-500">
                    Real Estate
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/furniture" activeClassName="text-blue-500">
                    Furniture
                  </NavLink>
                </li>
                <li className="relative group">
                  <NavLink to="/about-us" activeClassName="text-blue-500">
                    About Us
                  </NavLink>
                  <ul className="bg-base-100 shadow-lg rounded-lg w-52 z-40">
                    <li>
                      <NavLink to="/reviews" activeClassName="text-blue-500">
                        Reviews
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/awards" activeClassName="text-blue-500">
                        Awards
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/careers" activeClassName="text-blue-500">
                        Careers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/hours-location"
                        activeClassName="text-blue-500"
                      >
                        Hours & Location
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" activeClassName="text-blue-500">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-48 rounded-lg border-2 border-white dark:hover:bg-white"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" activeClassName="text-blue-500">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/interior" activeClassName="text-blue-500">
                Interior
              </NavLink>
            </li>
            <li>
              <NavLink to="/steel-building" activeClassName="text-blue-500">
                Steel Building
              </NavLink>
            </li>
            <li>
              <NavLink to="/construction" activeClassName="text-blue-500">
                Construction
              </NavLink>
            </li>
            <li>
              <NavLink to="/real-estate" activeClassName="text-blue-500">
                Real Estate
              </NavLink>
            </li>
            <li>
              <NavLink to="/furniture" activeClassName="text-blue-500">
                Furniture
              </NavLink>
            </li>
            <li className="relative group">
              <NavLink to="/about-us" activeClassName="text-blue-500">
                About Us
              </NavLink>
              <ul className="absolute hidden group-hover:block bg-base-100 shadow-lg mt-9 rounded-lg p-2 w-52 z-40">
                <li>
                  <NavLink to="/reviews" activeClassName="text-blue-500">
                    Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/awards" activeClassName="text-blue-500">
                    Awards
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/careers" activeClassName="text-blue-500">
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hours-location" activeClassName="text-blue-500">
                    Hours & Location
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="text-blue-500">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex lg:items-center">
          <p className="text-sm">
            +8801999 099 000 <br /> Call for Free Estimate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
