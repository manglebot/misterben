const Photography = () => {
  return (
    <div className="inner-page">
      <h1 className="inner-page__title">Photography</h1>

      <div className="inner-page__content">
        <h2>From Darkroom to Digital: My Photographic Journey</h2>

        <p>
          I have a long history with photography. My father had a home darkroom
          and taught me black & white photography at a very young age. This
          early exposure ignited a lifelong love for the art form, which I
          further honed during my academic years, including achieving the
          highest mark the school had ever received in photography GCSE and
          completing A-level Photography in just one year.
        </p>
        <p>
          While I initially explored a career in photography, I found that I
          preferred the freedom of creative expression. As a result, I have
          chosen to primarily pursue photography as a hobby. Over the years, I
          have had the opportunity to capture a diverse range of subjects and
          moments, from serving as the official photographer for the Monastery
          of Sound music festival to creating compelling commercial images for
          B'spoke Coffee House and selling images of my Modular on Shutterstock.
        </p>
        <p>
          I plan to update this page with more examples of my work when time
          allows.
        </p>
      </div>

      <p>
        <img
          className="inner-page__image"
          src="/misterben/assets/images/p_photography.jpg"
          alt="festival photography"
        />
      </p>

      <p>
        <img
          className="inner-page__image"
          src="/misterben/assets/images/p_music.jpg"
          alt="Photo of a close up of one of my synths"
        />
      </p>
    </div>
  );
};

export default Photography;
