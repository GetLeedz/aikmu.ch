import Link from "next/link";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Social = () => (
  <div className="flex gap-2 xl:gap-3 2xl:gap-5 text-white">
    <Link href="/" legacyBehavior>
      <a className="btn__social bg-[#5C6AC0]">
        <FaDiscord className="text-base 2xl:text-2xl" />
      </a>
    </Link>
    <Link href="/" legacyBehavior>
      <a className="btn__social bg-[#17A8DF]">
        <FaTwitter className="text-base 2xl:text-2xl" />
      </a>
    </Link>
    <Link href="/" legacyBehavior>
      <a className="btn__social bg-[#FF0115]">
        <FaYoutube className="text-base 2xl:text-2xl" />
      </a>
    </Link>
    <Link href="/" legacyBehavior>
      <a className="btn__social bg-[#2297D5]">
        <FaTelegramPlane className="text-base 2xl:text-2xl" />
      </a>
    </Link>
  </div>
);

export default Social;
