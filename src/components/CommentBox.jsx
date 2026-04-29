import React, { useState } from "react";
import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { LuFileImage } from "react-icons/lu";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FiAtSign } from "react-icons/fi";
import { IoStar } from "react-icons/io5";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div className="w-full h-fit pt-3">
      <div className="bg-gray-50 rounded-md px-3 pt-0 pb-2 shadow-sm border border-gray-200">
        <textarea
          className="w-full bg-transparent border-none text-[var(--text-gray)] text-[15px] placeholder-[var(--text-gray)] resize-none h-12 p-3 pb-0 focus:outline-none"
          placeholder="Add comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="flex items-center gap-1 px-3 pb-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-xl ${
                star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              <IoStar className="text-base" />
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3 pl-3 max-[542px]:mt-2">
          <div className="flex items-center space-x-4 text-gray-500 max-[370px]:hidden">
            <div className="flex items-center space-x-6 border-r border-gray-300 pr-5">
              <FaBold className="cursor-pointer hover:text-black text-sm" />
              <FaItalic className="cursor-pointer hover:text-black text-sm" />
              <FaUnderline className="cursor-pointer hover:text-black text-sm" />
            </div>

            <div className="flex items-center space-x-6">
              <FiPaperclip className="cursor-pointer hover:text-black" />
              <LuFileImage className="cursor-pointer hover:text-black" />
              <FaRegFaceSmile className="cursor-pointer hover:text-black" />
              <FiAtSign className="cursor-pointer hover:text-black" />
            </div>
          </div>

          <button
            className="bg-[var(--bg-orange)] hover:bg-[var(--bg-orange)]/90 cursor-pointer text-white text-sm sm:text-base font-medium sm:font-semibold py-1.5 sm:py-2 px-4 sm:px-8  rounded-full transition-colors duration-200"
            onClick={() => console.log("Submitted:", comment)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
