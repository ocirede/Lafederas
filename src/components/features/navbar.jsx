import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <nav className="border-b h-[6vh] flex gap-4 justify-between px-4 items-center py-4">
      <ul className="flex justify-center gap-4">
        <li className="hover:text-blue-500 cursor-pointer">
          <Link className={cn(buttonVariants({ variant: "link" }))} to="/">
            Senior Scene
          </Link>
          <Link className={cn(buttonVariants({ variant: "link" }))} to="/about">
            About{" "}
          </Link>
          <Link className={cn(buttonVariants({ variant: "link" }))} to="/contact">
          Contact{" "}
          </Link>
        </li>
      </ul>

      <ul className="flex justify-center gap-4">
        <li className="hover:text-blue-500 cursor-pointer">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
