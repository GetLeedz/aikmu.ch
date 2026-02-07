// components/navBar/NavBar.jsx
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 overflow-hidden">
      <div className="backdrop-blur-xl bg-[#020617]/80 border-b border-white/5">
        <div className="flex justify-center py-3">
          <Link href="/" aria-label="AiKMU Home">
            <div className="relative block w-[200px] h-[60px] sm:w-[240px] sm:h-[72px] lg:w-[260px] lg:h-[80px]">
              <Image
                src="/images/logo-aikmu-transparent_white_transparent.png"
                alt="AiKMU Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
