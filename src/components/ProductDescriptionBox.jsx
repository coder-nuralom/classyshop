import React, { useState } from "react";

import CommentBox from "./CommentBox";
import SingleComments from "./SingleComments";

const ProductDescriptionBox = () => {
  const [active, setActive] = useState(0);

  const tabs = ["Description", "Product Details", "Reviews"];
  const productDetails = [
    {
      label: "Composition",
      value: "Ceramic",
    },
    {
      label: "Property",
      value: "Metal",
    },
    {
      label: "Item Model Number",
      value: "BlendTec-Super-6000",
    },
    {
      label: "Product Dimensions",
      value: "120cm x 100cm x 140cm (L x W x H)",
    },
    {
      label: "Box Weight",
      value: "0.5 kg",
    },
    {
      label: "Container Type",
      value: "Cardboard Box",
    },
    {
      label: "Model Year",
      value: "2023",
    },
  ];
  return (
    <div>
      {/* all tabs */}
      <div className="flex items-center gap-6 max-[403px]:gap-3 max-[339px]:gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`${active === index && "text-[var(--bg-orange)]"} relative text-lg max-[459px]:text-base max-[403px]:text-sm max-[339px]:text-[13px] font-medium cursor-pointer pb-2 px-1`}
          >
            {tab}

            <span
              className={`absolute bottom-0 left-0 w-full h-[3px] bg-[var(--bg-orange)] rounded-full transform transition-transform duration-300 origin-left ${active === index ? "scale-x-100" : "scale-x-0"}`}
            ></span>
          </button>
        ))}
      </div>

      {/* tabs content box */}
      <div className="border border-black/10 rounded-md p-6 max-[575px]:p-4 mt-6 shadow-sm ">
        {active === 0 && (
          <div className="h-100 overflow-y-auto pr-3 max-[575px]:p-2">
            <div className="space-y-5.5">
              <div>
                <h4 className="text-black font-medium text-base mb-1">Smooth Leather</h4>
                <p className="text-[var(--text-gray)] text-[13px] sm:text-[15px]  font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, laudantium.
                  Dignissimos, voluptates enim. Sit quos ipsum magni et, obcaecati labore animi
                  quis facilis amet quia doloribus cupiditate alias consectetur eius
                  repudiandae quas enim soluta, cumque culpa tempore illo error ab.
                </p>
              </div>
              <div>
                <h4 className="text-black font-medium text-base mb-1">Smooth Leather</h4>
                <p className="text-[var(--text-gray)] text-[13px] sm:text-[15px]  font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, laudantium.
                  Dignissimos, voluptates enim. Sit quos ipsum magni et, obcaecati labore animi
                  quis facilis amet quia doloribus cupiditate alias consectetur eius
                  repudiandae quas enim soluta, cumque culpa tempore illo error ab.
                </p>
              </div>
              <div>
                <h4 className="text-black font-medium text-base mb-1">Smooth Leather</h4>
                <p className="text-[var(--text-gray)] text-[13px] sm:text-[15px]  font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, laudantium.
                  Dignissimos, voluptates enim. Sit quos ipsum magni et, obcaecati labore animi
                  quis facilis amet quia doloribus cupiditate alias consectetur eius
                  repudiandae quas enim soluta, cumque culpa tempore illo error ab.
                </p>
              </div>
            </div>
          </div>
        )}

        {active === 1 && (
          <div className="h-100 overflow-y-auto pr-3">
            <div className="flex items-center mb-3 gap-5">
              <span className="flex-1 text-black text-lg font-semibold">Properties</span>
              <span className="flex-1 text-black text-lg font-semibold pl-3">Values</span>
            </div>
            <div>
              {productDetails.map((item, index) => (
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-1 bg-[#f4f4f4] py-3 px-3 rounded-md text-[12px] sm:text-sm font-medium capitalize">
                    {item.label}
                  </span>
                  <span className="flex-1 bg-[#f4f4f4] py-3 px-3 rounded-md text-[12px] sm:text-sm font-medium capitalize">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === 2 && (
          <>
            <div className="h-100 flex flex-col">
              <div className="overflow-y-auto flex-1">
                <div className="all_comments space-y-9 pr-3">
                  {[...Array(10)].map((_, index) => (
                    <SingleComments key={index} />
                  ))}
                </div>
              </div>
              <CommentBox />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDescriptionBox;
