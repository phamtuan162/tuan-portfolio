"use client";

import { FaReact, FaFigma, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiCloudinary,
  SiSequelize,
  SiSocketdotio,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const skills = {
  title: "My skills",
  description:
    "Constantly learning and evolving, I have worked with various modern technologies in the field of web development.",
  skillList: [
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <SiPostgresql />, name: "postgreSql" },
    { icon: <SiSequelize />, name: "sequelize" },
    { icon: <SiCloudinary />, name: "cloudinary" },
    { icon: <FaFigma />, name: "figma" },
    { icon: <SiSocketdotio />, name: "socket.io" },
  ],
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px] text-center xl:text-left">
        <h3 className="text-2xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-[1.5]">
          {skills.description}
        </p>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.skillList.map((skill, index) => {
          return (
            <li key={index} className="">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[140px] bg-[#232329] rounded-xl flex items-center justify-center group">
                    <div className="text-4xl group-hover:text-accent transition-all duration-300">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
