import React, { useState } from "react";
import Form from "../../../ui/Form";
import FormRow from "../../../ui/FormRow";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import SpinnerMini from "../../../ui/SpinnerMini";
import FileInput from "../../../ui/FileInput";
import { Helmet } from "react-helmet";

function AddProject({ isMenuOpen }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // updateUser({ fullName, avatar });
  }

  function handleCancel() {
    // setFullName((fullname) => fullname);
  }
  return (
    <>
      <Helmet>
        <title>Add Project | MoNaSeF Abdelkarim</title>
      </Helmet>
      {!isMenuOpen && (
        <main className="flex flex-auto flex-col overflow-hidden text-base lg:flex-row">
          <div
            id="filter-menu"
            className={`border-right relative w-full flex-col items-center  font-fira_regular text-menu-text lg:flex`}
          ></div>
          {/* section title (mobile)  */}
          <div id="section-content-title" className="flex lg:hidden">
            <img
              className="section-arrow transition-all duration-200"
              alt=""
              src="icons/arrow.svg"
            />
            <p className="text-white">add project</p>
          </div>

          {/*   <!-- content --> */}

          <div className=" flex h-full w-full flex-col overflow-y-auto p-4">
            {/* <!-- add project section --> */}
            <div className="flex max-w-[1000px] flex-col">
              <Form onSubmit={handleSubmit}>
                <FormRow label="_project name">
                  <Input
                    type="text"
                    value={name}
                    disabled={isUpdating}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                  />
                </FormRow>
                <FormRow label="_description">
                  <Input
                    type="text"
                    value={description}
                    disabled={isUpdating}
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                  />
                </FormRow>
                <FormRow label="_details">
                  <Input
                    type="text"
                    value={details}
                    disabled={isUpdating}
                    onChange={(e) => setDetails(e.target.value)}
                    id="details"
                  />
                </FormRow>
                <FormRow label="_live url">
                  <Input
                    type="text"
                    value={liveUrl}
                    disabled={isUpdating}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    id="liveUrl"
                  />
                </FormRow>
                <FormRow label="_github url">
                  <Input
                    type="text"
                    value={githubUrl}
                    disabled={isUpdating}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    id="githubUrl"
                  />
                </FormRow>
                <FormRow label="_technologies">
                  <Input
                    type="text"
                    value={technologies}
                    disabled={isUpdating}
                    placeholder="tech1, tech2, tech3..."
                    onChange={(e) => setTechnologies(e.target.value)}
                    id="technologies"
                  />
                </FormRow>

                <FormRow label="Avatar image">
                  <FileInput
                    id="avatar"
                    accept="image/*"
                    disabled={isUpdating}
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </FormRow>
                <FormRow>
                  <Button
                    disabled={isUpdating}
                    onClick={handleCancel}
                    type="reset"
                    variation="secondary"
                  >
                    Cancel
                  </Button>

                  <Button disabled={isUpdating}>
                    {!isUpdating ? "Add project" : <SpinnerMini />}
                  </Button>
                </FormRow>
              </Form>
            </div>
          </div>
        </main>
      )}
    </>
  );

  // return (
  //   <div className="flex max-w-[1000px] flex-col">
  //     <Form onSubmit={handleSubmit}>
  //       <FormRow label="Project Name">
  //         <Input
  //           type="text"
  //           value={name}
  //           disabled={isUpdating}
  //           onChange={(e) => setName(e.target.value)}
  //           id="name"
  //         />
  //       </FormRow>
  //       <FormRow label="Avatar image">
  //         <FileInput
  //           id="avatar"
  //           accept="image/*"
  //           disabled={isUpdating}
  //           onChange={(e) => setAvatar(e.target.files[0])}
  //         />
  //       </FormRow>
  //       <FormRow>
  //         <Button
  //           disabled={isUpdating}
  //           onClick={handleCancel}
  //           type="reset"
  //           variation="secondary"
  //         >
  //           Cancel
  //         </Button>

  //         <Button disabled={isUpdating}>
  //           {!isUpdating ? "Update account" : <SpinnerMini />}
  //         </Button>
  //       </FormRow>
  //     </Form>
  //   </div>
  // );
}

export default AddProject;
