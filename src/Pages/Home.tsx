import { NavLink } from "react-router-dom";
import { useMenuContext } from "../components/Navigation/MenuContext";

const Home: React.FC = () => {
  const { closeMenu } = useMenuContext();
  return (
    <div className="inner-page">
      <div className="main__title">BEN BAYLISS</div>

      <div className="home-page__content">
        <h2>Hello</h2>
        <p>
          I'm Ben, a website developer and designer, and a bit of a multimedia
          junkie. Over 15 years, I've honed my skills in website design and
          development, while also exploring music composition, photography, and
          videography. My diverse background has equipped me with a unique blend
          of creativity and technical expertise, allowing me to craft engaging
          and functional web solutions.
        </p>
        <div className="home-page__collection">
          <p className="home-page__content__link">
            Work
            <NavLink onClick={closeMenu} to="/work">
              <img
                className="home-page__image"
                src="/assets/images/work_thumbs.jpg"
                alt="Work thumbnails"
              />
            </NavLink>
          </p>
          <p className="home-page__content__link">
            Play
            <NavLink onClick={closeMenu} to="/play">
              <img
                className="home-page__image"
                src="/assets/images/play_thumbs.jpg"
                alt="Play thumbnails"
              />
            </NavLink>
          </p>
        </div>
        <p className="home-page__content__link">
          You can find out more{" "}
          <NavLink onClick={closeMenu} to="/about">
            About
          </NavLink>{" "}
          me here
        </p>
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
