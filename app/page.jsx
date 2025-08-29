// app/page.tsx
"use client";

import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

// Dynamic import Photo để animation nặng không block FCP
const Photo = dynamic(() => import("@/components/Photo"), {
    ssr: false,
    loading: () => (
        <div className="w-[300px] xl:w-[444px] aspect-square rounded-full bg-gray-800 animate-pulse" />
    ),
});

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Home() {
    return (
        <main
            className={`${inter.className} min-h-screen flex flex-col justify-center`}
        >
            <section className="container h-full flex flex-col justify-center">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16 gap-8">
                    {/* Text Content */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Web Development Intern</span>
                        <h1 className="text-5xl font-bold mb-6">
                            Hello I&apos;m{" "}
                            <span className="text-accent">Minh Tuấn</span>
                        </h1>
                        <div className="max-w-[540px] mb-9 text-white/80 leading-relaxed">
                            <p>
                                Experienced in executing and completing a
                                graduation thesis project, enhancing full-stack
                                skills from database design to frontend
                                implementation.
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>
                                    Proficient in <strong>React.js</strong> and{" "}
                                    <strong>Next.js</strong>.
                                </li>
                                <li>
                                    Familiar with backend development using{" "}
                                    <strong>Node.js</strong>.
                                </li>
                                <li>
                                    Fast learner, responsible, and enthusiastic
                                    in teamwork.
                                </li>
                            </ul>
                        </div>

                        {/* Buttons + Socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <a
                                href="/CV_Pham_Minh_Tuan_Intern_Front_end.pdf"
                                download
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="uppercase flex items-center gap-2"
                                >
                                    <span>Download CV</span>
                                    <FiDownload className="text-xl" />
                                </Button>
                            </a>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
                <Stats />
            </section>
        </main>
    );
}
