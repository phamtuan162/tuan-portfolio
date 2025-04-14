"use client";

import CountUp from "react-countup";

const stats = [
  { num: null, text: "Lack of experience" },
  { num: 3, text: "Projects completed" },
  { num: 6, text: "Technologies known basic" },
  { num: 100, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-2">
      <div className="container ">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 gap-4 flex items-center justify-start  xl:justify-normal "
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-2xl xl:text-4xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[120px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Stats;
