import { MdViewInAr } from "react-icons/md";
import { RiCheckFill, RiCloseLine, RiCodeSSlashFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { MdOutlineArrowBack } from "react-icons/md";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";

const ModalProject = ({ closeModal, content }) => {
  const { id, title, images, liveLink, codeLink, detail, tech, features } =
    content;
  const imageReadyToView = images?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <div
      data-aos="zoom-out"
      className="absolute inset-0 z-50 flex h-full w-full items-center justify-center bg-blue-background bg-opacity-70  text-hello-gray "
    >
      <div className="relative rounded-xl bg-opacity-70 md:w-1/2 ">
        <span
          className="absolute right-4 top-4 hidden cursor-pointer rounded-full text-[#fea55f] ring ring-[#1E2D3D] lg:block "
          onClick={() => closeModal(false)}
        >
          <RiCloseLine size={30} />
        </span>

        <div
          // data-aos="zoom-in"
          className="content-container mx-auto my-auto h-screen w-[100vw] overflow-y-scroll  px-2 md:w-[90%] "
        >
          <div className="lg:my-7">
            <div className="relative rounded-2xl border border-[#1e2d3d] bg-blue-background">
              <span
                className="absolute left-0 top-0 ml-2 mt-2 cursor-pointer rounded-full text-[#fea55f] ring ring-[#1E2D3D] lg:hidden"
                onClick={() => closeModal(false)}
              >
                <MdOutlineArrowBack size={25} />
              </span>
              <p className="mx-10 my-2 text-center text-lg">
                <span className="font-semibold text-purple-text">
                  Project {id}
                </span>
                <span>{`//${title}`}</span>
              </p>
              <figure className=" rounded-t-2xl   border-b border-[#1e2d3d] lg:w-full ">
                <ReactImageGallery items={imageReadyToView} showNav={false} />
              </figure>

              <div className="mx-2 lg:mx-8">
                <p className="text-md my-6 lg:text-base">{detail}</p>
                {/* technologies  */}
                <p className="text-lg font-semibold text-purple-text">
                  Technologies:
                </p>
                <ul className="flex flex-wrap items-center gap-2">
                  {tech?.map((technology, index) => (
                    <li key={index} className="flex items-center">
                      <RxDotFilled /> {technology}
                    </li>
                  ))}
                </ul>
                {/* project features */}
                <p className="mt-3 text-lg font-semibold text-purple-text">
                  Features:
                </p>
                <ul>
                  {features?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <RiCheckFill /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-2">
                  <Link
                    to={liveLink}
                    target="_blank"
                    className="mb-8 flex items-center justify-center gap-2 rounded-lg bg-[#1C2B3A] px-3 py-2 text-white transition-all hover:bg-[#263B50]"
                  >
                    <MdViewInAr size={24} /> preview
                  </Link>
                  <Link
                    to={codeLink}
                    target="_blank"
                    className="mb-8 flex items-center justify-center gap-2 rounded-lg bg-[#1C2B3A] px-2 py-1 text-white transition-all hover:bg-[#263B50]"
                  >
                    <RiCodeSSlashFill size={24} /> view-code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
