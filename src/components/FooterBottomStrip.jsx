import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import payment1 from "../assets/payment-all-1.webp";

const FooterBottomStrip = () => {
  const socialsIconsData = [
    { icon: FaFacebookF, link: "/" },
    { icon: FaXTwitter, link: "/" },
    { icon: FaInstagram, link: "/" },
    { icon: FaPinterest, link: "/" },
    { icon: IoLogoGoogle, link: "/" },
  ];
  return (
    <section className="footer_bottom_strip py-4 border-t border-black/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between ">
          <div className="col_1 flex items-center gap-x-1.5">
            {socialsIconsData.map((icon, index) => (
              <Link
                to={icon.link}
                key={index}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[var(--bg-orange)] hover:text-white transition-all duration-300"
              >
                <icon.icon />
              </Link>
            ))}
          </div>
          <div className="col_2">
            <p className="text-[var(--text-gray)] mb-2 text-[#666666] font-medium leading-6 text-sm">
              Copyright © Classyshop. All Rights Reserved.
            </p>
          </div>
          <div className="col_3 w-fit overflow-hidden">
            <Link to={"/secure-payment"}>
              <img src={payment1} alt="secure payment" className="w-auto h-auto" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBottomStrip;
