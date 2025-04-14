"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, pariatur?",
  items: [
    // {
    //   company: "Tech Solutions Inc.",
    //   position: "Full stack Developer",
    //   duration: "2022 - Present",
    // },
  ],
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-[20px] text-center xl:text-left">
      <h3 className="text-2xl font-bold">{experience.title}</h3>
      {experience.items.length === 0 ? (
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-[1.5]">
          Although I have no previous practical experience, I am a quick learner
          and highly motivated to develop my skills.
        </p>
      ) : (
        <>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-[1.5]">
            {experience.description}
          </p>
          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {experience.items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="bg-[#232329] max-h-[184px]  py-6 px-10 flex items-center justify-start flex-col lg:items-start gap-1"
                  >
                    <ScrollArea className="h-full ">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px]  text-center lg:text-left">
                        {item.position}
                      </h3>
                      <div className="flex leading-snug gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent mt-[6px]"></span>
                        <p className="text-white/60 ">{item.company}</p>
                      </div>
                    </ScrollArea>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        </>
      )}
    </div>
  );
};

export default Experience;
