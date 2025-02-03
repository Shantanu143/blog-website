/* eslint-disable react/prop-types */

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="" />
    </div>
  );
}

function Navbar({ className }) {

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <NavbarMenu>
        <HoveredLink to="/">Home</HoveredLink>
        <HoveredLink to="/blogs">Blogs</HoveredLink>
        <HoveredLink to="/contact">Contact</HoveredLink>
        <HoveredLink to="/login">Login</HoveredLink>
      </NavbarMenu>
    </div>
  );
}

// ✅ Renamed `Menu` to `NavbarMenu` to prevent conflicts
export const NavbarMenu = ({ children }) => {
  return (
    <nav  className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6">
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, to }) => {
  return (
    <Link to={to} className="text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-600 hover:text-black">
      {children}
    </Link>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img src={src} width={140} height={70} alt={title} className="flex-shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">{description}</p>
      </div>
    </Link>
  );
};
