const Video = () => {
  return (
    <div className="inner-page">
      <h1 className="inner-page__title">Video</h1>

      <div className="inner-page__content">
        <p>
          I love video editing and film making. I spent a good part of my Fine
          Art degree making movies and videos, including 9 months making a 16mm
          story film with sound and editing with a beautiful Steenbeck analogue
          editor. These days, I'm all about Premiere Pro, with bits of After
          Effects, having used Final Cut Pro and Da Vinci Resolve along the way.
        </p>
        <p>
          Below are a couple of examples of films I've made recently using
          public domain footage.
        </p>
      </div>

      <h2>Misterben promo videos.</h2>

      <h3>
        What do you get when you mix an old film, a charity album, and some
        creativity?
      </h3>

      <p>
        Inspired by an old public domain bicycle safety film, I created a fun
        and quirky song as part of a charity release that supports cancer
        research, and created this video to help promote this release. You can
        buy the album{" "}
        <a
          href="https://pingdiscs.bandcamp.com/album/musical-mastication-volume-5"
          target="_blank"
        >
          here
        </a>
        .
      </p>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/mj2p-HI54q0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        Another promo video, this time, much more abstract, and made from videos
        taken from free online sites, and then heavily edited to be more
        abstract and playful. This particular video being 17 minutes long meant
        I had to push myself to keep the content exciting and constantly
        evolving. This track is called "all set up" and is from my album
        "benandi" released on{" "}
        <a href="https://ping-discs.bandcamp.com/album/benandi" target="_blank">
          Pingdiscs in September 2023
        </a>
      </p>

      <div className="video-container caption">
        <iframe
          src="https://www.youtube.com/embed/4k7rrCnz81g"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
