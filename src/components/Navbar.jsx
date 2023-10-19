import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import Img from "/src/assets/Img.png";

const menuItems = [
  {
    name: "Explore",
    href: "#",
  },
  {
    name: "Collections",
    href: "#",
  },
  {
    name: "Community",
    href: "#",
  },
];

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

const Navbar = ({ images, setImages }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [searchInput, setSearchInput] = useState("trending");
  const [page, setPage] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchImages = useCallback(async () => {
    try {
      if (searchInput) {
        setErrorMsg("");
        console.log(searchInput);
        const data = await fetch(
          `${API_URL}?query=${searchInput}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
            import.meta.env.VITE_API_KEY
          }`,
        );
        const details = await data.json();
        console.log(details.results);
        setImages(details.results);

        setSearchInput("");
      }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later.");
      console.log(error);
    }
  }, [page, searchInput]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const updateQuery = (e) => setSearchInput(e?.target?.value);
  const debounceOnChange = debounce(updateQuery, 500);

  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span className="font-bold">
              <img src={Img} alt="" />
            </span>
          </div>
          <div className="flex grow   justify-end">
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
            <input
              className="flex ml-8 w-[80%] h-10 rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="search"
              placeholder="Type something to search..."
              onChange={debounceOnChange}
            ></input>
            <div className="hidden w-[50%]  lg:block ">
              <ul className="ml-12 inline-flex space-x-8  pt-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="inline-flex  items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ml-2 mt-2 hidden lg:block"></div>

          <div className="ml-2 lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>

          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span className="font-bold">
                        <img src={Img} alt="" />
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                          <span>
                            <ChevronRight className="ml-3 h-4 w-4" />
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
