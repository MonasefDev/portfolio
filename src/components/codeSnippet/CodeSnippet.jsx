import CodeSnippetgist from "./CodeSnippetgist";
import dev from "../../developer.json";

function CodeSnippet() {
  return (
    <div className="flex h-full max-w-full flex-col overflow-hidden">
      {/* <!-- windows tab --> */}
      <div className="tab-height border-bot hidden h-full w-full items-center lg:flex"></div>

      {/* <!-- windows tab mobile --> */}
      {/* <div className="tab-height h-full w-full flex-none items-center lg:hidden"></div> */}

      <div className="flex h-full overflow-hidden py-6 lg:py-0">
        <div className="flex w-full flex-col overflow-hidden lg:px-6 lg:py-4">
          {/* <!-- title --> */}
          <h3 className="mb-4 border-y border-[#1e2d3d] p-5 text-sm text-white lg:border-0 lg:p-0 lg:text-menu-text">
            {"// Code snippet showcase:"}
          </h3>

          <div className="flex flex-col overflow-scroll px-5">
            {/* <!-- snippets --> */}
            {dev.gists.map((key) => (
              <CodeSnippetgist key={key} data-aos="fade-down" KEY={key} />
            ))}
          </div>
        </div>

        {/* <!-- scroll bar --> */}
        <div
          id="scroll-bar"
          className="border-left hidden h-full w-5 justify-center py-1 lg:flex"
        >
          <div className="h-[7px] w-[14px] bg-menu-text"></div>
        </div>
      </div>
    </div>
  );
}

export default CodeSnippet;
