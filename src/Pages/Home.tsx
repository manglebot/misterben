import { NavLink } from "react-router-dom";
import { useMenuContext } from "../components/Navigation/MenuContext";
import { InstagramEmbed } from "react-social-media-embed";

const Home: React.FC = () => {
  const { closeMenu } = useMenuContext();
  return (
    <div className="inner-page">
      <div className="main__title">BEN BAYLISS</div>

      <div className="home-page__content">
        <p></p>
        <div className="home-page__collection">
          <p className="home-page__main-link-1">
            <h2>Work</h2>
            <NavLink onClick={closeMenu} to="/work">
              <img
                className="home-page__image-1"
                src="/assets/images/work_thumbs.jpg"
                alt="Work thumbnails"
              />
            </NavLink>
          </p>
          <p className="home-page__main-link-2">
            <h2>Play</h2>
            <NavLink onClick={closeMenu} to="/play">
              <img
                className="home-page__image-2"
                src="/assets/images/play_thumbs.jpg"
                alt="Play thumbnails"
              />
            </NavLink>
          </p>
        </div>

        <h2>Hello</h2>
        <div className="home-page__about-section">
          <p className="home-page__about-text-paragraph">
            I'm Ben, a Manchester-based professional with over 15 years of
            experience in website development and graphic design. My expertise
            lies in crafting engaging and functional web solutions, showcasing a
            unique blend of creativity and technical prowess.
          </p>

          <p className="home-page__about-text-paragraph">
            Outside work, I have a passion for music and art. I'm an avid
            electronic musician, occasionally playing gigs with my DIY eurorack
            modular setup. September 2023 marked the release of my fourth album,
            a deeply personal album pushing my creative and technical
            boundaries. You can read about this on my{" "}
            <NavLink onClick={closeMenu} to="/pages/music">
              music page
            </NavLink>
            .
          </p>
        </div>
        <div className="home-page__about-section">
          <p className="home-page__about-social-media">
            <a
              className="social-media__link"
              href="https://www.linkedin.com/in/ben-bayliss-uk/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="200"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <br />
              LinkedIn
            </a>
          </p>

          <p className="home-page__about-social-media">
            <InstagramEmbed url="https://www.instagram.com/misterben/" />
          </p>
        </div>
        {/* eend about */}

        <p className="home-page__content__link">
          Feel free to{" "}
          <NavLink onClick={closeMenu} to="/contact">
            Contact
          </NavLink>{" "}
          me
        </p>
      </div>
    </div>
  );
};

export default Home;
