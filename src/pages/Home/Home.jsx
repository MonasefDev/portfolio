import { Helmet } from "react-helmet";
import dev from "../../developer.json";
import "./home.scss";
function Home({ isMenuOpen }) {
  return (
    <>
      <Helmet>
        <title>Home | MoNaSeF Abdelkarim</title>
      </Helmet>
      <main id="hello" className={`${isMenuOpen ? "hidden" : "flex"}`}>
        <div className="css-blurry-gradient-blue"></div>
        <div className="css-blurry-gradient-green"></div>

        <section className="hero">
          <div className="head">
            <span>Hi all, I am</span>
            <h1 className="text-3xl lg:text-5xl">{dev.name}</h1>
            <h2>{`>${dev.role}`}</h2>
          </div>

          <div id="info">
            <span className="action hidden lg:block">
              {"// complete the game to continue"}
            </span>
            <span className=" hidden lg:block">
              {"// you can also see it on my Github page"}
            </span>
            <span>{"// find my profile on Github:"}</span>
            <div className="code flex flex-wrap space-x-2">
              <span className="identifier">const</span>
              <span className="variable-name">githubLink</span>
              <span className="operator">=</span>
              <a
                className="string"
                href="'https://github.com/' + config.public.dev.contacts.social.github.user"
              >
                {`https://github.com/${dev.contacts.social.github.user}`}
              </a>
            </div>
          </div>
        </section>

        <section id="formjs">FormJavascript</section>
      </main>
    </>
  );
}

export default Home;
