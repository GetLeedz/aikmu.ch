import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Heading2 from "../headings/Heading2";
import Heading3 from "../headings/Heading3";

const Community = () => (
  <section className="mt-[60px] lg:mt-[110px] mx-4" id="community">
    <div className="container m-auto community community-bg py-0 md:py-40 lg:py-80">
      <div className="md:w-6/12 lg:w-4/12 text-center m-auto">
        <Heading3>Community</Heading3>
        <Heading2>
          Join The
          <span> Community</span>
        </Heading2>
        <p className="mt-[10px]">
          We have a large scale group to Join us to get the news as soon as
          possible and follow our latest announcements.
        </p>

        <div className="inline-block mt-[35px]">
         <Link href="/" legacyBehavior>
            <a className="btn__primary btn-gradient gap-2">
              Discord
              <FaArrowRight />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Community;
