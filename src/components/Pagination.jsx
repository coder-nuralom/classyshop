import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-10">
      <ReactPaginate.default
        pageCount={60}
        containerClassName="flex flex-wrap items-center gap-2"
        pageClassName={
          "border border-black/10 cursor-pointer rounded text-[13px] sm:text-sm text-gray-600 overflow-hidden"
        }
        pageLinkClassName="block px-3 py-1 w-full h-full"
        previousClassName={
          "border border-black/10 cursor-pointer rounded text-[13px] sm:text-sm text-gray-600 overflow-hidden"
        }
        previousLinkClassName="block px-3 py-1 w-full h-full"
        nextClassName={
          "border border-black/10 cursor-pointer rounded text-[13px] sm:text-sm text-gray-600"
        }
        nextLinkClassName="block px-3 py-1 w-full h-full"
        activeClassName={"bg-[var(--bg-orange)] text-white"}
      />
    </div>
  );
};

export default Pagination;
