import faqDatas from "../../data/faqs";
import Heading2 from "../headings/Heading2";
import Heading3 from "../headings/Heading3";
import SingleFAQ from "../singleFAQ/SingleFAQ";

const Faqs = () => (
  <section className="mt-[60px] lg:mt-[110px] mx-4" id="faq">
    <div className="container m-auto">
      <div className="text-center w-full sm:w-10/12 m-auto">
        <Heading3>FAQs</Heading3>
        <Heading2>
          Frequently Asked
          <span>Questions</span>
        </Heading2>

        <p className="mt-[5px]">
          Frequently Asked Questions.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-5 mt-[35px] lg:mt-[55px]">
        <div className="flex flex-col gap-3 lg:gap-6">
          {faqDatas.map(
            (faq, ind) => ind % 2 === 0 && <SingleFAQ faq={faq} key={faq.id} />
          )}
        </div>
        <div className="flex flex-col gap-3 lg:gap-6">
          {faqDatas.map(
            (faq, ind) => ind % 2 !== 0 && <SingleFAQ faq={faq} key={faq.id} />
          )}
        </div>
      </div>
    </div>
  </section>
);

export default Faqs;
