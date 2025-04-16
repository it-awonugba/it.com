import Link from "next/link";
import Logo from "@/components/logo";
import MobileNav from "@/components/header/nav-mobile";
import DesktopNav from "@/components/header/nav-desktop";
//import { ModeToggle } from "@/components/menu-toggle";

const navItems = [
  {
    label: "Home",
    href: "/",
    target: false,
  },
  {
    label: "Blog",
    href: "/blog",
    target: false,
  },
  {
    label: "About",
    href: "/about",
    target: false,
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-border/40 bg-background/95 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" aria-label="Home page">
          <Logo />
        </Link>
        <div className="hidden xl:flex gap-7 items-center justify-between">
          <DesktopNav navItems={navItems} />
        </div>
        <div className="flex items-center xl:hidden">
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
