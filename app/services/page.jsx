"use client";

import { motion } from "framer-motion";
import ServiceItem from "./components/ServiceItem";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur similique.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX ",
    description:
      "Lorem ipsum dolor sit amet consectetur similique.Lorem ipsum dolor sit amet consectetur similique.Lorem ipsum dolor sit amet consectetur similique.Lorem ipsum dolor sit amet consectetur similique.Lorem ipsum dolor sit amet consectetur similique.",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    description: "Lorem ipsum dolor sit amet consectetur similique.",
    href: "",
  },
  {
    num: "04",
    title: "Data Structures and Algorithms (DSA)",
    description: "Lorem ipsum dolor sit amet consectetur similique.",
    href: "",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return <ServiceItem service={service} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesPage;
