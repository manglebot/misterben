// import { NavLink } from "react-router-dom";
// import Creative from "./Creative";

const Music = () => {
  return (
    <div className="inner-page">
      <h1 className="inner-page__title">Music</h1>

      <div className="inner-page__content">
        <h2>I have a lovely obsession with music.</h2>

        <p>
          I have been creating electronic music since the late 20th century,
          exploring the playful world of sounds and crafting unique, accessible
          bleeps, and quirky tones. My creative tools mainly include laptops,
          modular synths, and a touch of piano (and some guitar, not so
          skillfully).
        </p>

        <p>
          My musical journey led to the release of my first album around 2006,
          which I'm excited to rediscover and share with you soon! In 2016, I
          unveiled two albums, available on various streaming platforms and also
          on Bandcamp. You can find them here:{" "}
          <a href="https://misterben.bandcamp.com" target="_blank">
            misterben.bandcamp.com
          </a>
          .
        </p>
        <p>
          <img
            className="inner-page__image"
            src="/src/assets/images/misterben_bandcamp.jpg"
            alt="My album covers on Bandcamp"
          />
        </p>

        <p>
          The most recent addition to my discography is my album "benandi,"
          released in September 2023 under the ping discs record label. You can
          immerse yourself in its tracks here:&nbsp;
          <a
            href="https://ping-discs.bandcamp.com/album/benandi"
            target="_blank"
          >
            ping-discs.bandcamp.com/album/benandi
          </a>
          . This may get put on streaming sites, but for now it's exclusively on
          CD and Bandcamp.
        </p>
        <p>
          <img
            className="inner-page__image"
            src="/src/assets/images/misterben_benandi.jpg"
            alt="Benandi album cover"
          />
        </p>
      </div>
    </div>
  );
};

export default Music;
