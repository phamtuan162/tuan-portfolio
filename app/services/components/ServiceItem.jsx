"use client";

import { BsArrowDownLeft } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ServiceItem = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    const el = pRef.current;
    if (el) {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const maxHeight = lineHeight * 3; // chiều cao của 3 dòng
      if (el.scrollHeight > maxHeight) {
        setShowMore(true);
      }
    }
  }, []);

  return (
    <div className="border-b border-white/20 h-full cursor-pointer">
      <div className="flex-1 flex flex-col justify-center gap-6 group ">
        <div className="w-full flex items-center justify-between">
          <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
            {service.num}
          </div>
          <Link
            href={service.href}
            className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex-center hover:-rotate-45"
          >
            <BsArrowDownLeft className="text-primary text-3xl" />
          </Link>
        </div>
        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
          {service.title}
        </h2>

        <p
          ref={pRef}
          className={`${
            expanded
              ? ""
              : "line-clamp-3 overflow-hidden text-ellipsis text-white/60"
          }`}
        >
          {service.description}
        </p>
      </div>

      {showMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-accent text-sm mb-2 mx-auto"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ServiceItem;
