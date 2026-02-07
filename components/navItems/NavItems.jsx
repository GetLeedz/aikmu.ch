import Link from "next/link";

const NavItems = ({ cls, setOpen, open }) => {
  return (
    <ul className={`flex ${cls} gap-3 xl:gap-5 text-medium xl:text-nav`}>
      {[
        ["Home", "#hero"],
        ["Roadmap", "#roadmap"],
        ["Gallery", "#gallery"],
        ["Team", "#team"],
        ["Community", "#community"],
        ["FAQ", "#faq"],
      ].map(([title, url]) => (
        <li
          onClick={() => setOpen(!open)}
          className="transition duration-300 hover:text-[color:var(--color-secondary)]"
          key={title}
        >
          <Link href={url} legacyBehavior>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
