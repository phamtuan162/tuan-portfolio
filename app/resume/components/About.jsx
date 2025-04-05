"use client";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, est.",
  info: [
    { fieldName: "Name", fieldValue: "Phạm Minh Tuấn" },
    { fieldName: "Phone", fieldValue: "0397822119" },
    { fieldName: "Experience", fieldValue: "Lack of experience" },
    { fieldName: "Nationality", fieldValue: "VietNamese" },
    { fieldName: "Email", fieldValue: "tnpham352@gmail.com" },
    { fieldName: "Languages", fieldValue: "English" },
  ],
};

const About = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-3 max-w-[620px] mx-auto xl:mx-0">
        {about.info.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start  gap-4"
            >
              <span className="text-white/60">{item.fieldName}</span>
              <span className="text-xl">{item.fieldValue}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
