import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSection, setSectionInfo } from "../../store/sectionSlice";

function SectionInfo({ section, sectionOpen = false }) {
  const dispatch = useDispatch();
  const { sectionInfo: currentSectionInfo } = useSelector(
    (state) => state.section,
  );
  const [isOpen, setIsOpen] = useState(sectionOpen);
  return (
    <>
      {/* title */}
      <div
        id="section-content-title"
        className=" mb-2 flex min-w-full items-center lg:mb-0"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img
          id="section-arrow-menu"
          src="../icons/arrow.svg"
          alt="arrow"
          className={`section-arrow mx-3 transition-all duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
        <p className="font-fira_regular text-white">{section.title}</p>
      </div>
      <nav className={`${isOpen ? "block" : " hidden"}`}>
        {section.info.map((folder, index) => {
          return (
            <div
              key={folder.title}
              onClick={() => {
                dispatch(setSectionInfo(folder.title));
                dispatch(setSection(section));
              }}
              className={`my-2 grid grid-cols-2 items-center font-fira_regular ${
                currentSectionInfo === folder.title
                  ? "text-white"
                  : "text-menu-text"
              }`}
            >
              <div className="col-span-2 flex hover:cursor-pointer hover:text-white">
                <img
                  id="diple"
                  className={`${
                    currentSectionInfo === folder.title ? "rotate-90" : ""
                  } transition-all duration-200`}
                  src={`../icons/${
                    currentSectionInfo === folder.title ? "diple90" : "diple"
                  }.svg`}
                  alt=""
                />
                <img
                  src={"../icons/folder" + (index + 1) + ".svg"}
                  alt=""
                  className="mr-3"
                />
                <p id="folder.title" v-html="key">
                  {folder.title}
                </p>
              </div>
              {folder.files !== undefined && (
                <div className="col-span-2">
                  {folder.files.map((file) => {
                    return (
                      <div
                        key={file.title}
                        className="my-2 flex hover:cursor-pointer hover:text-white"
                      >
                        <img
                          src="../icons/markdown.svg"
                          alt=""
                          className="ml-8 mr-3"
                        />
                        <p>{file.title}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}

export default SectionInfo;
