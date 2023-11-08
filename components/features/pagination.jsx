import React, { useState } from "react";
import { LeftArrow, RightArrow } from "@/utils/icons/icons";

const rowPerPage = 10;
const totalDocuments = 40;
const totalPages = Math.ceil(totalDocuments / rowPerPage);

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
    setActivePage(newPage);
  };

  return (
    <>
      <div className="flex gap-5 justify-center py-16">
        <button
          onClick={() => {
            console.log("Previous");
            if (activePage == 1) {
              return;
            } else {
              setActivePage(activePage - 1);
              setCurrentPage(activePage - 1);
              console.log(activePage - 1);
            }
          }}
          disabled={activePage === 1}
          className={`${
            activePage === 1 ? `bg-slate-400` : `bg-[#0A405C]`
          } text-white p-2 rounded-full`}
        >
          <LeftArrow />
        </button>

        <button
          className={`${
            activePage - 1 == currentPage ? `bg-[#0A405C]` : `bg-white`
          } ${
            activePage - 1 !== currentPage ? `text-[#0A405C]` : `text-white`
          } px-4 py-1 rounded-full font-bold ${
            activePage == 1 ? `hidden` : "block"
          } `}
          onClick={() => handlePageChange(activePage - 1)}
        >
          {activePage == 1 ? `` : activePage - 1}
        </button>

        <button
          className={`${
            activePage == currentPage ? `bg-[#0A405C]` : `bg-white`
          } ${
            activePage !== currentPage ? `text-[#0A405C]` : `text-white`
          } px-4 py-1 rounded-full font-bold`}
          onClick={() => handlePageChange(activePage)}
        >
          {activePage}
        </button>

        <button
          className={`${
            activePage + 1 == currentPage ? `bg-[#0A405C]` : `bg-white`
          } ${
            activePage + 1 !== currentPage ? `text-[#0A405C]` : `text-white`
          } px-4 py-1 rounded-full font-bold  ${
            activePage == totalPages ? `hidden` : `block`
          }`}
          onClick={() => {
            handlePageChange(activePage + 1);
          }}
        >
          {" "}
          {activePage == totalPages ? `` : activePage + 1}{" "}
        </button>

        <button
          onClick={() => {
            console.log("Next");
            if (activePage === totalPages) {
              return;
            } else {
              setActivePage(activePage + 1);
              setCurrentPage(activePage + 1);
              console.log(activePage + 1);
            }
          }}
          disabled={activePage === totalPages}
          className={`${
            activePage === totalPages ? `bg-slate-400` : `bg-[#0A405C]`
          } text-white p-2 rounded-full`}
        >
          <RightArrow />
        </button>
      </div>
    </>
  );
};

export default Pagination;
