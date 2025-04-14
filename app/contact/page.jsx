"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "0397822119" },
  { icon: <FaEnvelope />, title: "Email", description: "tnpham352@gmail.com" },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "An Duong, Hai Phong, VietNam",
  },
];

const handleSubmit = (event) => {
  event.preventDefault();

  const form = new FormData(event.target);

  for (const [key, value] of form.entries()) {
    console.log(`${key}:`, value);
  }
};

const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-3xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60 leading-[1.5]">
                Feel free to reach out for any collaboration, project inquiries,
                or just to say hello. I&apos;m always open to new opportunities
                and connections.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="first_name"
                  placeholder="First name"
                  name="firs_name"
                />
                <Input
                  type="last_name"
                  placeholder="Last name"
                  name="last_name"
                />
                <Input type="email" placeholder="Email Address" name="email" />
                <Input type="phone" placeholder="Phone number" name="phone" />
              </div>

              {/* select */}
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Ui/Ux Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />

              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end xl:items-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[48px] h-[48px] xl:w-[60px] xl:h-[60px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[22px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default ContactPage;
