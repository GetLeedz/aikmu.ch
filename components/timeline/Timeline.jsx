import roadmapData from "../../data/roadmap";
import TimelineCard from "../cards/TimelineCard";
import Heading2 from "../headings/Heading2";
import Heading3 from "../headings/Heading3";

const Timeline = () => (
  <section className="mt-[60px] lg:mt-[110px] xl:mt-[235px] mx-4" id="roadmap">
    <div className="container m-auto">
      <div className="text-center w-full sm:w-7/12 m-auto">
        <Heading3>Timeline</Heading3>
        <Heading2>
          Our Launch
          <span> Roadmap</span>
        </Heading2>

        <p className="mt-[5px]">
          This is our roadmap so far, but this is only the beginning we want to
          build our project around our community, so if you have more ideas we
          are all ears
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-[35px] lg:mt-[55px]">
        {roadmapData.map((data) => (
          <TimelineCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
