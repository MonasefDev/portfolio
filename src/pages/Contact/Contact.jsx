import { Helmet } from "react-helmet";
import Sidebar from "./Sidebar";
import ContactSection from "./ContactSection";
import SnippetSection from "./SnippetSection";
import "./contact.scss";

const Contact = ({ isMenuOpen }) => {
  return (
    <>
      <Helmet>
        <title>Contact | Monasef Abdelkarim</title>
      </Helmet>
      <main className={` ${isMenuOpen ? "hidden" : "page"} `}>
        <div id="mobile-page-title">
          <h2>_contact-me</h2>
        </div>
        {/* Section Menu */}
        <Sidebar />
        <div className="flex h-full w-full flex-col lg:grid lg:grid-cols-2">
          <ContactSection />
          <div className="hidden lg:block">
            <SnippetSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
