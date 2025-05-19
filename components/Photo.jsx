"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="relative w-[300px] h-[300px] xl:w-[444px] xl:h-[444px]"
            >
                {/* Ảnh nền */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="absolute inset-0 rounded-full overflow-hidden mix-blend-lighten"
                >
                    <Image
                        src="/assets/photo5.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </motion.div>

                {/* Viền SVG */}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    fill="transparent"
                    viewBox="0 0 504 504"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="252"
                        cy="252"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "16 25 92 72",
                                "4 250 22 22",
                            ],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
