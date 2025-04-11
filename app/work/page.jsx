"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "./components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    tittle: "ProManage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, veritatis?",
    stack: [
      { name: "Javascript" },
      { name: "Next.js" },
      { name: "Express.js" },
      { name: "Tailwind.css" },
      { name: "PostgreSQL" },
      { name: "Cloudinary" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://pro-manage-xi.vercel.app",
    github: "https://github.com/phamtuan162/Project-Trello",
  },
  {
    num: "01",
    category: "fullstack",
    tittle: "ProManage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, veritatis?",
    stack: [
      { name: "Javascript" },
      { name: "Next.js" },
      { name: "Express.js" },
      { name: "Tailwind.css" },
      { name: "PostgreSQL" },
      { name: "Cloudinary" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://pro-manage-xi.vercel.app",
    github: "https://github.com/phamtuan162/Project-Trello",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none cursor-pointer">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hove:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover object-top object-left"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hove:bg-accent-hove text-[22px]  w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default WorkPage;
