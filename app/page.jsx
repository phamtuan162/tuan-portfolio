import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Fullstack Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I&apos;m
                            <br />
                            <span className="text-accent">Minh Tuấn</span>
                        </h1>
                        <p className="max-w-[540px] mb-9 text-white/80 leading-relaxed">
                            No work experience yet, but I am eager to learn,
                            passionate about web development, and fully
                            committed to any opportunity offered.
                            <br />
                            Proficient in building frontend with
                            <strong>React.js</strong> and
                            <strong>Next.js</strong>. Familiar with backend
                            development using <strong>Node.js</strong>.
                            <br />
                            Fast learner with the ability to quickly adapt to
                            new technologies.
                            <br />
                            Highly motivated, responsible, and enthusiastic in
                            teamwork.
                        </p>

                        {/* btn and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <a href="/CV.pdf" download>
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
