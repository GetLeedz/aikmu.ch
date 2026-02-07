import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import logo from "../../public/images/uniqueCard-av.png";
import img from "../../public/images/uniqueCard-img.png";
import img1 from "../../public/images/uniqueCard-img1.png";
import img2 from "../../public/images/uniqueCard-img2.png";
import UniqueCard from "../cards/UniqueCard";
import Heading2 from "../headings/Heading2";
import Heading3 from "../headings/Heading3";

const ArtStudio = () => (
  <section className="mt-[65px] sm:mt-[180px] mx-4">
    <div className="w-full xl:w-11/12 2xl:w-10/12 grid grid-cols-1 xl:grid-cols-2 gap-[85px] ml-0 xl:ml-20 2xl:ml-24 overflow-hidden sm:overflow-visible">
      <div className="relative unique-cards pb-4 sm:pb-0 -mt-[20px] sm:-mt-[90px] lg:-mt-10 order-2 sm:order-1">
        <div className="static sm:absolute top-[30%] left-0 sm:left-[10%] md:left-[15%] lg:left-[20%] xl:left-0">
          <UniqueCard img={img1} logo={logo} id="92811" price={1.48} />
        </div>
        <div className="static sm:absolute -top-2 left-0 sm:left-[25%] md:left-[30%] lg:left-[35%] xl:left-1/4 animate-pulse">
          <UniqueCard img={img} logo={logo} id="92811" price={1.48} />
        </div>
        <div className="static sm:absolute top-[15%] left-0 sm:left-[50%] lg:left-[54%] ">
          <UniqueCard img={img2} logo={logo} id="92811" price={1.48} />
        </div>
      </div>
      <div className="container mx-auto mt-0 sm:mt-[360px] lg:mt-[400px] xl:mt-0 order-1 sm:order-2">
        <Heading3>Welcome to NFTPO Art Studio.</Heading3>
        <Heading2>
          4444 Unique
          <span> NFT Avatars</span>
        </Heading2>

        <h6 className="heading-6 mt-[5px]">
          The NFTPO Art studio is a private collection of NFTs unique digital
          collectibles. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </h6>

        <p className="mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sed amet
          morbi diam eget faucibus adipiscing vulputate vitae. Facilisis amet,
          ac hac urna, feugiat egestas nunc nullam risus.
        </p>

        <div className="inline-block mt-[33px]">
        <Link href="/" legacyBehavior>
            <a className="btn__primary gap-[10px] border-round-gradient">
              <span className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#5C6AC0]">
                <FaDiscord />
              </span>
              Join Discord
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ArtStudio;
