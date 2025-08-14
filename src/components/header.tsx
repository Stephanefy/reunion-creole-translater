import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./nav-link";

export function Header() {
  return <header className="fixed top-0 left-0 right-0 z-50 h-25 bg-linear-30 from-brand-azure to-brand-leafyGreen py-8">
    <nav className="max-screen-md md:w-10/12 mx-auto flex justify-between p-4 md:p-0 items-center bg-transparent h-full">
      <Link href="/" className="md:w-1/2 pr-14">
        <Image src="/tradmwin-logo.svg" alt="logo" width={130} height={130} />
      </Link>
      <div className="flex items-center gap-4 text-brand-nearWhite">
        <NavLink href="/histoire">Histoire du créole réunionnais</NavLink>

      </div>
    </nav>


  </header>;
}