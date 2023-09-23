import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommentedText from "../commentedText/CommentedText";

function Content() {
  const { section, sectionInfo } = useSelector((state) => state.section);
  const [currentInfo, setCurrentInfo] = useState("");

  useEffect(() => {
    const info = section.info.filter((info) => info.title === sectionInfo);
    setCurrentInfo(...info);
  }, [section, currentInfo, sectionInfo]);

  return (
    <div id="left" className="border-right flex w-full flex-col">
      {/* windows tab desktop */}
      <div className="tab-height border-bot hidden w-full items-center lg:flex">
        <div className="border-right flex h-full items-center">
          <p className="px-3 font-fira_regular text-base text-menu-text">
            {section.title}
          </p>
          <img src="../icons/close.svg" alt="" className="mx-3" />
        </div>
      </div>

      {/*   windows tab mobile */}
      <div id="tab-mobile" className="flex font-fira_retina lg:hidden">
        <span className="text-white">{"//"} </span>
        <h3 className="px-2 text-white">{section.title}</h3>
        <span className="text-menu-text"> / </span>
        <h3 className="pl-2 text-menu-text">{sectionInfo}</h3>
      </div>

      {/*  text */}
      <div
        id="commented-text"
        className="lg:border-right flex h-full w-full overflow-hidden"
      >
        <div className="ml-5 mr-10 h-full w-full overflow-scroll lg:my-5">
          <CommentedText text={currentInfo.description} />
        </div>

        {/*  scroll bar */}
        <div
          id="scroll-bar"
          className="border-left hidden h-full justify-center py-1 lg:flex"
        >
          <div id="scroll"></div>
        </div>
      </div>
    </div>
  );
}
export default Content;
