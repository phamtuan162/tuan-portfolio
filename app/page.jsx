import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const bulletStyle =
    ""; /*"relative before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-white/80 before:rounded-full";
 */
export default function Home() {
    return (
        <section className="h-full">
            <div className="container h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Web Development Intern</span>
                        <h1 className="h1 mb-6">
                            Hello I&apos;m
                            <br />
                            <span className="text-accent">Minh Tuấn</span>
                        </h1>
                        <div className="max-w-[540px] mb-9 text-white/80 leading-relaxed">
                            <p>
                                Experienced in executing and completing a
                                graduation thesis project, detailed in the Work
                                section below. This project enhanced my
                                full-stack web development skills, from database
                                design to frontend implementation.
                            </p>
                            <ul className="list-disc pl-6">
                                <li className={bulletStyle}>
                                    Proficient in building frontend with
                                    <strong className="mx-1">React.js</strong>
                                    and
                                    <strong className="ml-1">Next.js</strong>.
                                </li>
                                <li className={bulletStyle}>
                                    Familiar with backend development using
                                    <strong className="ml-1">Node.js</strong>.
                                </li>
                                <li className={bulletStyle}>
                                    Fast learner, highly motivated, responsible,
                                    and enthusiastic in teamwork.
                                </li>
                            </ul>
                        </div>

                        {/* btn and socials */}
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

                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
}
