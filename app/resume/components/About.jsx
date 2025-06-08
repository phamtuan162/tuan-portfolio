"use client";

const about = {
    title: "About me",
    description:
        "I am a passionate developer always looking to improve my skills and gain new experiences in the field of web development.",
    info: [
        { fieldName: "Name", fieldValue: "Phạm Minh Tuấn" },
        { fieldName: "Phone", fieldValue: "0397822119" },
        { fieldName: "Experience", fieldValue: "Lack of experience" },
        { fieldName: "Nationality", fieldValue: "Vietnamese" },
        { fieldName: "Email", fieldValue: "tnpham352@gmail.com" },
        {
            fieldName: "Location",
            fieldValue: "Thanh Loc Ward, District 12, Ho Chi Minh City",
        },
    ],
};

const About = () => {
    return (
        <div className="flex flex-col gap-[20px]">
            <h3 className="text-2xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-[1.5]">
                {about.description}
            </p>

            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-3 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="flex  justify-center xl:justify-start  gap-4"
                        >
                            <span className="text-white/60 whitespace-nowrap">
                                {item.fieldName} :
                            </span>
                            <span className="text-xl">{item.fieldValue}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default About;
