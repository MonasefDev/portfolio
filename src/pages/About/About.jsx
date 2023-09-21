import CodeSnippet from "../../components/codeSnippet/CodeSnippet";
import Content from "../../components/content/Content";
import SectionMenu from "../../components/sidebar/SectionMenu";

import "./about.scss";

import { Helmet } from "react-helmet";

function About({ isMenuOpen }) {
  return (
    <>
      <Helmet>
        <title>About | MoNaSeF Abdelkarim</title>
      </Helmet>

      <main id="about-me" className={` ${isMenuOpen ? "hidden" : "page"} `}>
        <div id="mobile-page-title">
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
    </>
  );
}

export default About;
