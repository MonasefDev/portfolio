import { useDispatch, useSelector } from "react-redux";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import Content from "../../components/content/Content";
import SectionMenu from "../../components/sidebar/SectionMenu";
import dev from "../../developer.json";

import "./about.scss";

import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { setSection, setSectionInfo } from "../../store/sectionSlice";

function About({ isMenuOpen }) {
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.section);
  useEffect(() => {
    dispatch(setSection(dev.about.sections[0]));
    dispatch(setSectionInfo(dev.about.sections[0].info[0].title));
  }, []);

  return (
    <>
      <Helmet>
        <title>About | MoNaSeF Abdelkarim</title>
      </Helmet>

      {currentSection.sectionInfo !== "" && (
        <main className={` ${isMenuOpen ? "hidden" : "page"} `}>
          <div>
            <h2>_about-me</h2>
          </div>
          {/* Section Menu */}
          <SectionMenu />
          <div className="flex h-full w-full flex-col lg:grid lg:grid-cols-2">
            {/*--------- content------------ */}
            <Content />
            {/*---------------- Section Code Snippet ----------------*/}
            <CodeSnippet />
          </div>
        </main>
      )}
    </>
  );
}

export default About;
