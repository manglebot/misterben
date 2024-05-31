import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const Home: React.FC = () => {
  const generateEmail = () => {
    const username = "info";
    const domain = "misterben.co.uk";
    return `${username}@${domain}`;
  };

  return (
    <div>
      <h1 className="main__title">CONTACT</h1>
      <h2 className="main__subtitle">Get in touch.</h2>
      <p>
        Feel free to get in touch. CV can be sent on request -{" "}
        <a href={`mailto:${generateEmail()}`}>{generateEmail()}</a>
      </p>

      {/* from home page */}
      <div className="about-page__about-section">
        <p className="about-page__about-social-media">
          <a href="https://www.linkedin.com/in/ben-bayliss-uk/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>{" "}
            <span className="linkedin-text">LinkedIn</span>
          </a>
        </p>

        <p className="home-page__about-social-media">
          <InstagramEmbed url="https://www.instagram.com/misterben/" />
        </p>
      </div>
    </div>
  );
};

export default Home;
