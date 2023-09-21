import { useDispatch, useSelector } from "react-redux";
import dev from "../../developer.json";
import SectionContact from "./SectionContact";
import SectionInfo from "./SectionInfo";
import { setSection, setSectionInfo } from "../../store/sectionSlice";
function SectionMenu() {
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.section);
  return (
    <div id="page-menu" className="flex w-full">
      {/* DESKTOP section icons */}
      <div className="border-right hidden h-full w-16 lg:block">
        {dev.about.sections.map((section) => {
          return (
            <div
              id="section-icon"
              key={section.title}
              className={`my-6 flex justify-center  hover:cursor-pointer hover:opacity-100 ${
                section.title === currentSection.section.title
                  ? "opacity-100"
                  : "opacity-[0.4]"
              }`}
              onClick={() => {
                dispatch(setSection(section));
                dispatch(setSectionInfo(section.info[0].title));
              }}
            >
              <img src={section.icon} alt={section.title + "-section"} />
            </div>
          );
        })}
      </div>
      {/* focused section content Desctop */}
      <div
        id="section-content"
        className="border-right hidden h-full w-full lg:block"
      >
        {/* folders */}
        <SectionInfo section={currentSection.section} sectionOpen />
        <SectionContact contacts={dev.contacts.direct} sectionOpen />
      </div>
      <div id="section-content" className="w-full font-fira_regular lg:hidden">
        <div>
          {/* section title (mobile)  */}
          {dev.about.sections.map((section) => {
            return <SectionInfo key={section.title} section={section} />;
          })}
          <SectionContact contacts={dev.contacts.direct} />
        </div>
      </div>
    </div>
  );
}

export default SectionMenu;
