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
        <div className="flex h-full w-full flex-col">
          <div className="tab-height border-bot hidden w-full items-center lg:flex">
            <div className="border-right flex h-full items-center">
              <p className="px-3 font-fira_regular text-base text-menu-text">
                Contacts
              </p>
              <img src="../icons/close.svg" alt="" className="mx-3" />
            </div>
          </div>
          <div className="flex h-full w-full flex-col lg:grid lg:grid-cols-2">
            <ContactSection />
            <div className="hidden lg:block">
              <SnippetSection />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
