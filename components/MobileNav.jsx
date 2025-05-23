"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex-center">
        <CiMenuFries className="text-[32px] text-accent " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle> </SheetTitle>

        <div className="mt-8 mb-10 text-center text-2xl">
          <Link href="/">
            <h1 className=" font-semibold">
              Minh Tuấn
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex-center flex-col gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize  transition-all hover:text-accent-hover`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
