import { useState } from "react";

function SectionContact({ contacts, sectionOpen = false }) {
  const [isOpen, setIsOpen] = useState(sectionOpen);
  return (
    <>
      <div
        id="section-content-title"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="border-top -mt-[1px] flex min-w-full items-center"
      >
        <img
          id="section-arrow-menu"
          src="../icons/arrow.svg"
          alt=""
          className={`section-arrow ${isOpen ? "rotate-90" : ""} mx-3`}
        />
        <p className="font-fira_regular text-sm text-white">{contacts.title}</p>
      </div>
      <div
        id="contact-sources"
        className={`${isOpen ? "flex" : "hidden"} my-2   flex-col`}
      >
        {contacts.sources.map((contact, i) => {
          return (
            <div key={contact.name + i} className="mb-2 flex items-center">
              <img
                src={`../icons/${contact.name}.svg`}
                alt=""
                className="mx-4"
              />
              <p className="font-fira_retina text-menu-text hover:text-white">
                {contact.contact}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SectionContact;
