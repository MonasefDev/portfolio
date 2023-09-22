import { useState } from "react";
import { useGists } from "../../hooks/useGists";
import Highlight from "react-highlight";

import "./codeSnippet.scss";

function CodeSnippetgist({ KEY }) {
  const { gist, isLoading } = useGists(KEY);
  // const { comment, isLoading: isCommentLoading } = useComments(KEY);
  const [isOpen, setIsOpen] = useState(false);

  function getMonths(date) {
    let now = new Date();
    let gistDate = new Date(date);
    let diff = now.getTime() - gistDate.getTime();
    let days = Math.floor(diff / (1000 * 3600 * 24));
    let months = Math.floor(days / 30);
    return months;
  }
  return (
    <>
      {!isLoading && (
        <div className="gist mb-5">
          {/* <!-- head info --> */}
          <div className="my-2 flex justify-between">
            <div className="flex">
              {/*  <!-- avatar --> */}
              <img
                src={gist.owner.avatar_url}
                alt=""
                className="mr-2 h-8 w-8 rounded-full"
              />
              {/* <!-- username & gist date info --> */}
              <div className="flex flex-col">
                <a
                  id="username"
                  href={`https://github.com/${gist.owner.login}`}
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 font-fira_bold text-xs text-purple-text hover:cursor-pointer"
                >
                  @{gist.owner.login}
                </a>
                <p className="font-fira_retina text-xs text-menu-text">
                  Created {getMonths(gist.created_at)} months ago
                </p>
              </div>
            </div>

            {/* <!-- details and stars --> */}
            <div className="flex justify-self-end font-fira_retina text-xs text-menu-text lg:mx-2">
              <div className="flex hover:cursor-pointer hover:text-white lg:mx-2">
                <img
                  src="../icons/gist/comments.svg"
                  alt=""
                  className="mr-2 h-4 w-4"
                />
                <span
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  details
                </span>
              </div>
              <div className="hidden hover:cursor-pointer hover:text-white lg:flex">
                <img
                  src="../icons/gist/star.svg"
                  alt=""
                  className="mx-2 h-4 w-4"
                />
                <span></span>
                <span className="">{`${gist.comments} stars`}</span>
              </div>
            </div>
          </div>
          <Highlight
            className="snippet-container javascript"
            language="javascript"
          >
            {Object.values(gist.files)[0].content}
          </Highlight>

          {isOpen && (
            <div className="border-top mt-4 flex justify-between pt-4 font-fira_retina text-menu-text">
              {gist.comments !== 0 ? (
                <p id="comment" className="w-5/6">
                  Comments
                </p>
              ) : (
                <p className="w-5/6">No comments.</p>
              )}
              <img
                src="../icons/close.svg"
                alt=""
                className="hover:cursor-pointer"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CodeSnippetgist;
