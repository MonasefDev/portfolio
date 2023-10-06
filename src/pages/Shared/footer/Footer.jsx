import { Link } from "react-router-dom";

import dev from "../../../developer.json";
import "./footer.scss";

function Footer() {
  return (
    <footer className="border-top flex overflow-hidden font-fira_retina text-menu-text md:justify-between">
      <div className="flex w-full justify-between md:justify-start">
        <span
          id="social-title"
          className="border-right flex h-full items-center justify-center px-5"
        >
          find me in:
        </span>
        <div id="social-icons" className="flex">
          <Link
            to={
              dev.contacts.social.twitter.url +
              "/" +
              dev.contacts.social.twitter.user
            }
            target="_blank"
            className="flex items-center justify-center"
          >
            <img src="../icons/social/twitter.svg" alt="social-icon" />
          </Link>
          <Link
            to={
              dev.contacts.social.twitter.url +
              "/" +
              dev.contacts.social.twitter.user
            }
            target="_blank"
            className="flex items-center justify-center"
          >
            <img src="../icons/social/facebook.svg" alt="social-icon" />
          </Link>
          <Link
            to={
              dev.contacts.social.github.url +
              "/" +
              dev.contacts.social.github.user
            }
            target="_blank"
            className="flex items-center justify-center lg:hidden"
          >
            <img src="../icons/social/github.svg" alt="social-icon" />
          </Link>
        </div>
      </div>

      <Link
        to={
          dev.contacts.social.github.url + "/" + dev.contacts.social.github.user
        }
        target="_blank"
        className="border-left hidden min-w-[170px] items-center px-5 md:flex"
      >
        <div>@{dev.contacts.social.github.user}</div>
        <img src="../icons/social/github.svg" alt="social-icon" />
      </Link>
    </footer>
  );
}

export default Footer;
