import Image from "next/image";
import teamsData from "../../data/team";
import Heading2 from "../headings/Heading2";
import Heading3 from "../headings/Heading3";

const Team = () => (
  <section className="mt-[60px] lg:mt-[110px] mx-4" id="team">
    <div className="container m-auto">
      <div className="text-center w-full md:w-7/12 m-auto">
        <Heading3>Stewardship</Heading3>

        <Heading2>
          Meet Our
          <span> Creative Team</span>
        </Heading2>

        <p className="m-2">
          Some teams call themselves a family, but we actually are one! all
          designers with a passion for art
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-evenly mt-[35px] lg:mt-[55px] gap-5">
        {teamsData.map((team) => (
          <div
            className="flex flex-col items-center justify-center"
            key={team.id}
          >
            <div className="flex items-center justify-center box rounded-full overflow-hidden w-[130px] md:w-[230px] h-[130px] md:h-[230px] relative">
              <Image
                className="transition duration-300 hover:scale-105 rounded-full"
                src={`/images/${team.img}.png`}
                alt={team.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center mt-1 md:mt-[20px]">
              <h5 className="font-bold text-[24px] md:text-[32px] leading-[28px] md:leading-[42px]">
                {team.name}
              </h5>
              <p className="-mt-1">{team.possition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
