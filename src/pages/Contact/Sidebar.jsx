import SectionContact from "../../components/sidebar/SectionContact";
import dev from "../../developer.json";
function Sidebar() {
  return (
    <div id="page-menu" className="flex w-full">
      {/* focused section content Desctop */}
      <div
        id="section-content"
        className="border-right hidden h-full w-full lg:block"
      >
        {/* folders */}
        <SectionContact contacts={dev.contacts.direct} sectionOpen />
        <SectionContact contacts={dev.contacts.find} sectionOpen />
      </div>
      <div id="section-content" className="w-full font-fira_regular lg:hidden">
        <div>
          <SectionContact contacts={dev.contacts.direct} />
          <SectionContact contacts={dev.contacts.find} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
