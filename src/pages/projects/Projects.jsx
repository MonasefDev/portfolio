import "./projects.scss";

import { useState } from "react";
import dev from "../../developer.json";
import ModalProject from "../../components/modalProject/ModalProject";
function Projects({ isMenuOpen }) {
  const techs = ["React", "HTML", "CSS", "Vue", "Angular", "Gatsby", "Flutter"];
  const [checkedValue, setCheckedValue] = useState([]);
  const [filtredProject, setFiltredProject] = useState(dev.projects);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    let checkedArr;
    if (checked) {
      checkedArr = [...checkedValue, value];
    } else {
      checkedArr = checkedValue.filter((element) => element !== value);
    }
    setCheckedValue(checkedArr);
    getFiltredProject(checkedArr);
  };
  const getFiltredProject = (checkedArr) => {
    if (checkedArr.length === 0) setFiltredProject(dev.projects);
    else {
      const filtred = dev.projects.filter((project) => {
        return checkedArr.includes(project.tech[0]);
      });
      setFiltredProject(filtred);
    }
  };

  return (
    <>
      {!isMenuOpen && (
        <main className="flex flex-auto flex-col overflow-hidden text-base lg:flex-row">
          <div id="mobile-page-title">
            <h2>_projects</h2>
          </div>

          {/* section title (mobile)  */}
          <div
            id="section-content-title"
            className="flex lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img
              className={`section-arrow transition-all duration-200 ${
                isOpen ? "rotate-90" : ""
              }`}
              alt=""
              src="icons/arrow.svg"
            />
            <p className="text-white">projects</p>
          </div>

          <div
            id="filter-menu"
            className={`border-right ${
              isOpen ? "" : "hidden"
            }  w-full flex-col font-fira_regular text-menu-text lg:flex`}
          >
            {/* <!-- title --> */}
            <div
              id="section-content-title"
              className="hidden min-w-full items-center lg:flex"
            >
              <img
                id="section-arrow-menu"
                src="icons/arrow-down.svg"
                alt=""
                className="section-arrow open mx-3"
              />
              <p className="font-fira_regular text-sm text-white">projects</p>
            </div>

            {/* <!-- filter menu --> */}
            <nav id="filters" className="w-full flex-col">
              {techs.map((tech, i) => {
                return (
                  <div key={tech} className="flex items-center py-2">
                    <input
                      key={tech}
                      type="checkbox"
                      onChange={handleChange}
                      value={tech}
                    />
                    <img
                      src={`icons/techs/${tech.toLowerCase()}.svg`}
                      alt=""
                      className="tech-icon mx-4 h-5 w-5"
                    />
                    <span>{tech}</span>
                  </div>
                );
              })}
            </nav>
          </div>
          {/*   <!-- content --> */}

          <div className="flex w-full flex-col overflow-hidden">
            {/* <!-- windows tab --> */}
            <div className="tab-height border-bot hidden w-full items-center lg:flex">
              <div className="border-right flex h-full items-center">
                <p className="px-3 font-fira_regular text-sm text-menu-text">
                  {checkedValue.length === 0
                    ? "All"
                    : checkedValue.map((tech) => tech + ",")}
                </p>
                <img src="icons/close.svg" alt="" className="m-3" />
              </div>
            </div>

            {/* <!-- windows tab mobile --> */}
            <div id="tab" className="flex items-center lg:hidden">
              <span className="text-white"> {"//"}</span>
              <p className="px-3 font-fira_regular text-sm text-white">
                projects
              </p>
              <span className="text-menu-text"> / </span>
              <p className="px-3 font-fira_regular text-sm text-menu-text">
                {checkedValue.length === 0
                  ? "All"
                  : checkedValue.map((tech) => tech + ", ")}
              </p>
            </div>

            {/* <!-- projects --> */}

            <div
              id="projects-case"
              className="grid h-full max-w-full grid-cols-1 overflow-scroll lg:grid-cols-2 lg:self-center"
            >
              {filtredProject.length === 0 && (
                <div
                  id="not-found"
                  className="border-all my-5 flex h-full flex-col items-center justify-center font-fira_retina text-menu-text"
                >
                  <span className="flex justify-center pb-3 text-4xl">
                    X__X
                  </span>
                  <span className="flex justify-center text-xl text-white">
                    No matching projects
                  </span>
                  <span className="flex justify-center">
                    for these technologies
                  </span>
                </div>
              )}
              {filtredProject.map((project) => {
                return (
                  <>
                    <div key={project.id} className="lg:mx-5">
                      {/* <!-- title --> */}
                      <span className="my-3 flex text-base">
                        <h3 className="mr-3 font-bold text-purplefy">
                          {`Project ${project.id}`}
                        </h3>
                        <h4 className=" text-menu-text">{`// ${project.title}`}</h4>
                      </span>

                      {/* <!-- info --> */}
                      <div id="project-card" className="flex flex-col">
                        <div id="window">
                          <div className="absolute right-3 top-3 flex">
                            <img
                              src={`icons/techs/filled/${project.tech[0].toLowerCase()}.svg`}
                              alt=""
                              className="mx-1 h-7 w-7 hover:opacity-75"
                            />
                          </div>
                          <img
                            src={project.img}
                            id="showcase"
                            alt=""
                            className=""
                          />
                        </div>

                        <div className="border-top px-6 pb-8 pt-6">
                          <p className="mb-5 font-fira_retina text-sm text-menu-text">
                            {project.description}
                          </p>
                          <div
                            id="view-button"
                            onClick={() => {
                              setIsModalOpen(true);
                              setSelectedProject(project);
                            }}
                            target="_blank"
                            rel="noreferrer"
                            className="w-fit cursor-pointer rounded-lg px-4 py-2 font-fira_retina text-xs text-white"
                          >
                            view-project
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              {isModalOpen && (
                <ModalProject
                  isOpen={isModalOpen}
                  closeModal={setIsModalOpen}
                  content={selectedProject}
                />
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Projects;
