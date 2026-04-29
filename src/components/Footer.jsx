import React from "react";
import { GrChatOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import FooterBottomStrip from "./FooterBottomStrip";

const Footer = () => {
  return (
    <footer className="border-t border-black/10">
      <div className="container mx-auto px-4 max-[450px]:px-2 sm:px-6">
        <div className="wrapper py-12.5 grid grid-cols-1 min-[575px]:grid-cols-2 lg:grid-cols-5 gap-6 gap-y-10">
          <div className="contact_us">
            <h3 className="text-lg font-semibold mb-[15px]">Contact Us</h3>
            <p className="text-[var(--text-gray)] mb-2 text-[#666666] font-medium leading-6 text-sm">
              Classyshop Demo <br /> 507-Union Trade Centre <br /> United States
            </p>
            <p className="text-[var(--text-gray)] mb-2 text-[#666666] font-medium leading-6 text-sm">
              Call us:{" "}
              <Link className="hover:text-[var(--bg-orange)] duration-200">
                +00 123-456-789
              </Link>
            </p>
            <p className="text-[var(--text-gray)] mb-2 text-[#666666] font-medium leading-6 text-sm">
              Email us:{" "}
              <Link className="hover:text-[var(--bg-orange)] duration-200">
                admin@example.com
              </Link>
            </p>
            <div className="flex items-center gap-x-3 mt-[15px]">
              <GrChatOption className="text-[40px] text-[var(--bg-orange)]" />
              <p className="text-[#111111] text-lg font-semibold leading-6">
                Online Chat Get <br /> Expert Help
              </p>
            </div>
          </div>
          <div className="products">
            <h3 className="text-lg font-semibold mb-[15px]">Products</h3>
            <ul className="space-y-4">
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Prices Drop</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>New Products</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Best Sellers</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Site Map</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Stores</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="company">
            <h3 className="text-lg font-semibold mb-[15px]">Our company</h3>
            <ul className="space-y-4">
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Delivery</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Legal Notice</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Terms & Conditions</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Secure Payment</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Contact Us</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>About Us</Link>
              </li>
            </ul>
          </div>
          <div className="account">
            <h3 className="text-lg font-semibold mb-[15px]">Your Account</h3>
            <ul className="space-y-4">
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Order Tracking</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Sign In</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Create Account</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Discount</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Wishlist</Link>
              </li>
              <li className="text-[var(--text-gray)] text-[#666666] font-medium  text-sm">
                <Link>Credit Slip</Link>
              </li>
            </ul>
          </div>
          <div className="update">
            <h3 className="text-lg font-semibold mb-[15px]">Get Our Latest Update !</h3>
            <p className="text-[var(--text-gray)] mb-[15px] text-[#666666] font-medium leading-6 text-sm">
              Subscribe our newsletter to get news about special discounts.
            </p>
            <form>
              <input
                type="text"
                placeholder="Your email address"
                className="w-full border border-[#e5e5e5] text-sm rounded-[5px] px-[14px] py-[10px] focus:outline-none"
              />
              <button className="uppercase px-[25px] bg-[var(--bg-orange)] mt-[10px] text-white rounded-[5px] py-2.5 cursor-pointer text-[15px] font-medium block">
                subscribe
              </button>
              <div className="flex items-start gap-3 mt-4 ">
                <input type="checkbox" id="terms" className="h-4 w-4 shrink-0 mt-[7px]" />
                <label className="text-[var(--text-gray)] leading-6 text-[#666666] font-medium text-sm">
                  I agree to the terms and conditions and the policy
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterBottomStrip />
    </footer>
  );
};

export default Footer;
