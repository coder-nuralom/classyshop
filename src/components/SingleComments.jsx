import React from "react";
import client from "../assets/client1.png";
import client2 from "../assets/client2.avif";
import { IoStar } from "react-icons/io5";

const SingleComments = () => {
  return (
    <div className="single_comments">
      <div className="flex flex-wrap items-start gap-x-8">
        <div className="flex items-start gap-4">
          <div className="image_wrapper w-10 h-10 max-[412px]:h-8 max-[412px]:w-8 rounded-full overflow-hidden shrink-0">
            <img
              src={client2}
              alt="client"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-start gap-x-8 max-[375px]:gap-x-4 gap-y-0">
              <div>
                <h4 className="text-[15px] max-[412px]:text-[13px] font-medium text-black -mb-1">
                  Nuralom Rana
                </h4>
                <span className="font-medium text-[13px] max-[412px]:text-[11px] text-[var(--text-gray)]">
                  5 minutes age
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, index) => (
                  <IoStar
                    key={index}
                    className={`${index < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} max-[490px]:text-sm max-[412px]:text-xs`}
                  />
                ))}
              </div>
            </div>
            <div className="content">
              <div className="comment_text mt-2">
                <p className="text-[15px] max-[450px]:text-[14px] max-[412px]:text-[13px]  font-medium text-[var(--text-gray)]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed molestias
                  suscipit ut tempore! Aut, saepe sunt vero sint amet esse sit itaque nesciunt
                  exercitationem, distinctio repellendus nisi sed in minus non quas modi
                  tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComments;
