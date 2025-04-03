import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Phạm Tuấn
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}

        <div className="xl:hidden">Mobile nav</div>
      </div>
    </header>
  );
};
export default Header;
