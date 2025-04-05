"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, pariatur?",
  items: [
    {
      institution: "Online Course Platform",
      position: "Full stack Web Development Bootcamp ",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      position: "Full stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      position: "Full stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      position: "Full stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      position: "Full stack Web Development Bootcamp",
      duration: "2023",
    },
  ],
};

const Education = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {education.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {education.items.map((item, index) => {
            return (
              <ScrollArea className="h-[184px]" key={index}>
                <li className="bg-[#232329] h-[184px]  py-6 px-10 flex items-center justify-center flex-col lg:items-start gap-1">
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-xl max-w-[260px]  text-center lg:text-left">
                    {item.position}
                  </h3>
                  <div className="flex gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent mt-[6px]"></span>
                    <p className="text-white/60 leading-snug">
                      {item.institution}
                    </p>
                  </div>
                </li>
              </ScrollArea>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Education;
