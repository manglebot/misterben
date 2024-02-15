import { InstagramEmbed } from "react-social-media-embed";

const Creative = () => {
  return (
    <div className="inner-page">
      <h1 className="inner-page__title">Creative Design</h1>

      <div className="inner-page__content">
        <p>
          You know that design where the client says "anything goes". I don't
          get it often, and even then, I know it's still almost always got a
          brand identity to guide it. But just occasionally I get complete
          freedom to do anything I like, and that's when I have lot of fun, and
          usually end up learning new things along the way...
        </p>

        <p>
          Below is one such example, becuase it's design for my own music, but
          the record label releasing it were really happy for me to just play
          and have fun and in the end were delighted with the results.
        </p>

        <h2>Misterben - Benandi album cover design</h2>

        <h3>I've released a few albums</h3>

        <p>
          Naturally I do all my own artwork and publicity material.
          <br />
          The latest one with my album Benandi, released on Ping Discs label in
          2023.
          <a
            className="inner-page__link"
            href="https://ping-discs.bandcamp.com/album/benandi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Available Here
          </a>
        </p>

        <p className="spacer-after">
          The concepts and choice of images is inspired by the music created and
          the journey I went on to create this album.
        </p>

        <p>Here is the final design.</p>

        <p>
          <img
            className="inner-page__image"
            src="/assets/images/misterben_benandi_front.jpg"
            alt="Misterben benandi album design"
          />
        </p>

        <p>
          <img
            className="inner-page__image"
            src="/assets/images/misterben_benandi_inner.jpg"
            alt="Misterben benandi album design"
          />
        </p>

        <p>Front cover close up.</p>

        <p>
          <img
            className="inner-page__image"
            src="/assets/images/misterben_benandi_closeup.jpg"
            alt="Misterben benandi album design"
          />
        </p>

        <p>Inner close up.</p>

        <p>
          <img
            className="inner-page__image"
            src="/assets/images/misterben_benandi_closeup-inner.jpg"
            alt="Misterben benandi album design"
          />
        </p>

        <p>Here are a couple of earlier concepts.</p>

        <p>
          <img
            className="inner-page__image"
            src="/assets/images/misterben_benandi2.jpg"
            alt="Misterben benandi album design"
          />
        </p>

        <p>
          <img
            className="inner-page__image"
            src="/assets/images/misterben_album_idea.jpg"
            alt="Misterben benandi album design"
          />
        </p>

        <p>
          In After Effects and Premiere Pro, I also created promo shorts for
          this release such as the examples below.
        </p>

        <p className="inner-page__centered">
          <iframe
            width="381"
            height="677"
            src="https://www.youtube.com/embed/UfKtbYjthv8"
            title="misterben instagram promo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </p>

        <p className="inner-page__centered">
          <iframe
            width="381"
            height="677"
            src="https://youtube.com/embed/bewsBcwJ7CI"
            title="misterben youtube promo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </p>

        <div className="inner-page__centered">
          <InstagramEmbed
            url="https://www.instagram.com/reel/CxoCjUVpXir/"
            width={581}
          />
        </div>
      </div>
    </div>
  );
};

export default Creative;
