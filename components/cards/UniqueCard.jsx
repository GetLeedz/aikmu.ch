import Image from "next/image";
import Link from "next/link";

const UniqueCard = ({ img, logo, id, price }) => (
  <div className="uniqueCard card-bg-border m-auto w-56 sm:w-80 xl:w-[17rem] p-[10px]">
    <div className="w-full rounded-[10px] overflow-hidden">
      <Image
        className="uniqueCard-avt"
        src={img}
        alt="img name"
        layout="responsive"
        placeholder="blur"
      />
    </div>
    <div className="flex items-center justify-between flex-wrap gap-3 px-[10px] pt-[30px] pb-4 sm:pb-[30px]">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          src={logo}
          width="42"
          height="42"
          alt={logo}
        />
        <div>
          <p className="text-[12px] leading-[14px]">#{id}</p>
          <h3 className="text-[18px] leading-[18px] font-semibold">
            {price} ETH
          </h3>
        </div>
      </div>
     <Link href="/" legacyBehavior>
        <a className="text-[14pex] font-bold leading-[17px] px-[24px] py-[14px] rounded-[10px] btn-gradient">
          Buy Now
        </a>
      </Link>
    </div>
  </div>
);

export default UniqueCard;
