import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../features/cartSlice";
import { setLogin, setLogout } from "../../features/authSlice";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import categories from "../../Data/categoryData";
import { Collapse } from "react-collapse";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { toggleMenu } from "../../features/mobileMenuSlice";
import { toggleSearchModal } from "../../features/searchModalSlice";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const categoryRef = useRef(null);

  // Filter only parent categories
  const parentCategories = [
    { id: "all", name: "All Categories" },
    ...categories.filter((cat) => cat.parentId === null),
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 lg:static">
      <div className="py-3 lg:py-5.5 border-b border-black/10 bg-white ">
        <div className="container mx-auto px-4 max-[450px]:px-2 sm:px-6 flex items-center justify-between gap-x-8">
          <div className="col_1 flex items-center gap-x-3 flex-shrink-0 w-auto">
            <span
              onClick={() => dispatch(toggleMenu())}
              className="p-1 border border-black/15 rounded-sm xl:hidden"
            >
              <RxHamburgerMenu className="text-xl" />
            </span>
            <Link to={"/"}>
              <img src={logo} alt="logo" className="h-8 xl:h-10 max-[470px]:h-6" />
            </Link>
          </div>

          <div className="col_2 flex-1 min-w-[200px] max-w-[600px] hidden lg:block">
            <form className="border-2 border-[var(--bg-orange)] rounded-[5px] flex items-center text-[var(--text-gray)]">
              <div ref={categoryRef} className="relative">
                <button
                  onClick={() => setShowCategoryDropdown((prev) => !prev)}
                  type="button"
                  className="text-sm xl:text-[15px] font-normal cursor-pointer w-fit px-2 h-full flex items-center gap-x-2 whitespace-nowrap"
                >
                  {selectedCategory}
                  {showCategoryDropdown ? (
                    <IoChevronUp className="ml-1" />
                  ) : (
                    <IoChevronDown className="ml-1" />
                  )}
                </button>
                <div className="categroy_dowpdown absolute left-0 top-full mt-2 w-55  z-20">
                  <Collapse isOpened={showCategoryDropdown}>
                    <ul className="max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200">
                      {parentCategories.map((category, index) => (
                        <li
                          key={category.id}
                          className="hover:bg-[var(--bg-orange)] px-4 py-[5px] hover:text-white cursor-pointer text-[15px] font-normal cursor-pointer"
                          onClick={() => {
                            setShowCategoryDropdown(false);
                            setSelectedCategory(category.name);
                          }}
                        >
                          {category.name}
                        </li>
                      ))}
                    </ul>
                  </Collapse>
                </div>
              </div>

              <div className="w-[1px] h-[25px] bg-[#d3d3d3] ml-2 mr-2.5" />

              <input
                type="text"
                placeholder="Search product here.."
                className="focus:outline-none text-sm xl:text-base placeholder:text-sm pr-2 flex-1 min-w-0"
              />
              <button
                type="submit"
                className="capitalize bg-[var(--bg-orange)] text-white px-3 xl:px-7 py-2 xl:py-3 text-sm font-medium cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>
          </div>

          <div className="col_3 flex-shrink-0 flex items-center justify-end gap-4 xl:gap-x-5.5 max-[575px]:gap-x-2 whitespace-nowrap">
            <ProfileMenu className="hidden lg:block" />

            <div className="w-[1px] h-[30px] bg-[#d3d3d3] hidden lg:block" />

            <ul className="flex items-center max-[470px]:gap-x-3 gap-x-4 xl:gap-x-5.5">
              <li className="lg:hidden">
                <ProfileMenu />
              </li>

              <li className="lg:hidden">
                <Link
                  onClick={() => dispatch(toggleSearchModal())}
                  className="relative group flex items-center justify-center"
                >
                  <IoSearchOutline className="text-[25px] xl:text-[28px] max-[470px]:text-[23px] hover:text-[var(--bg-orange)] duration-200" />
                </Link>
              </li>

              <li className="hidden sm:block">
                <Link to={"/compare"} className="relative group">
                  <IoGitCompareOutline className="transform rotate-90 text-[25px] xl:text-[28px] max-[470px]:text-[23px] hover:text-[var(--bg-orange)] duration-200" />
                  <span className="absolute -top-2 -right-2 bg-[var(--bg-orange)] rounded-full  h-4.5 xl:h-5 w-4.5 xl:w-5 flex items-center justify-center text-xs text-white">
                    0
                  </span>
                  <span className="text-xs bg-[var(--bg-orange)] text-white px-2 py-1 absolute left-1/2 -translate-x-1/2 top-[120%] pointer-events-none opacity-0 group-hover:opacity-100  duration-200 group-hover:delay-500">
                    Compare
                  </span>
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link to={"/my-account/lists"} className="relative group">
                  <IoMdHeartEmpty className="text-[25px] xl:text-[28px] max-[470px]:text-[23px] hover:text-[var(--bg-orange)] duration-200" />
                  <span className="absolute -top-2 -right-2 bg-[var(--bg-orange)] rounded-full  h-4.5 xl:h-5 w-4.5 xl:w-5 flex items-center justify-center text-xs text-white">
                    {wishlistItems.length}
                  </span>
                  <span className="text-xs bg-[var(--bg-orange)] text-white px-2 py-1 absolute left-1/2 -translate-x-1/2 top-[120%] pointer-events-none opacity-0 group-hover:opacity-100  duration-200 group-hover:delay-500">
                    Wishlist
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={() => dispatch(toggleCart())} className="relative group">
                  <BsCart2 className="text-[25px] xl:text-[28px] max-[470px]:text-[23px] hover:text-[var(--bg-orange)] duration-200" />
                  <span className="absolute -top-2 -right-2 bg-[var(--bg-orange)] rounded-full h-4.5 xl:h-5 w-4.5 xl:w-5 flex items-center justify-center text-xs text-white">
                    {cartItems.length}
                  </span>
                  <span className="text-xs bg-[var(--bg-orange)] text-white px-2 py-1 absolute left-1/2 -translate-x-1/2 top-[120%] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:delay-500">
                    Cart
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
