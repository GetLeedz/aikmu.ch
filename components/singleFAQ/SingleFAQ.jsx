import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SingleFAQ = ({ faq }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div
        tabIndex="0"
        className={`flex items-center justify-between gap-5 cursor-pointer ${
          showInfo && "rounded-b-none border-b-0"
        } rounded-[10px] py-5 px-[30px] faq-bg-border`}
        onClick={() => setShowInfo(!showInfo)}
      >
        <p>{faq.title}</p>
        <div className="btn">
          <button
            type="button"
            className="w-6 lg:w-10 h-6 lg:h-10 rounded-full flex items-center justify-center bg-white bg-opacity-20"
          >
            {showInfo ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
      </div>
      {showInfo && (
        <div className="py-5 px-[30px] faq-border">
          <p>{faq.info}</p>
        </div>
      )}
    </div>
  );
};

export default SingleFAQ;
