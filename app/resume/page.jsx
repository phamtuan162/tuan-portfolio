"use client";

import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import About from "./components/About";

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex-center py-12 xl:py-0 "
    >
      <div className="container">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] xl:max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[40vh] w-full mb-2">
            {/* experience */}
            <TabsContent className="w-full" value="experience">
              <Experience />
            </TabsContent>
            {/* education */}
            <TabsContent className="w-full" value="education">
              <Education />
            </TabsContent>
            {/* skills */}
            <TabsContent className="w-full h-full" value="skills">
              <Skills />
            </TabsContent>
            {/* about */}
            <TabsContent
              className="w-full text-center xl:text-left"
              value="about"
            >
              <About />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default ResumePage;
