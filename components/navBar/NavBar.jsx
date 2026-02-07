// components/navBar/NavBar.jsx
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  return (
    // Fixierter Header – schneidet alles darunter sauber ab
    <nav className="fixed inset-x-0 top-0 z-50 overflow-hidden">
      {/* Top-Banner mit Blur & dunklem Hintergrund */}
      <div className="backdrop-blur-xl bg-[#020617]/80 border-b border-white/5">
        {/* Logo zentriert */}
        <div className="flex justify-center py-3">
          <Link href="/" legacyBehavior>
            <a
              aria-label="GetLeedz Home"
              className="relative block w-[200px] h-[60px] sm:w-[240px] sm:h-[72px] lg:w-[260px] lg:h-[80px]"
            >
              <Image
                src={Logo}
                alt="GetLeedz Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
