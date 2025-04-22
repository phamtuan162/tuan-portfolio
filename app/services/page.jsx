"use client";

import { motion } from "framer-motion";
import ServiceItem from "./components/ServiceItem";

const services = [
    {
        num: "01",
        title: "Web Development",
        description:
            "Learn to build modern websites using HTML, CSS, JavaScript, and popular frameworks like React or Next.js.",
        href: "",
    },
    {
        num: "02",
        title: "UI/UX Design",
        description:
            "Explore how to create user-friendly and visually appealing interfaces using tools like Figma and Adobe XD.",
        href: "",
    },
    {
        num: "03",
        title: "SEO Optimization",
        description:
            "Master the basics of Search Engine Optimization to boost website visibility and attract more visitors.",
        href: "",
    },
    {
        num: "04",
        title: "Data Structures & Algorithms (DSA)",
        description:
            "Sharpen your problem-solving skills and prepare for technical interviews with core DSA concepts.",
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
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeIn",
                        },
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
