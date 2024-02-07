const Art = () => {
  return (
    <div className="inner-page">
      <h1 className="inner-page__title">Art</h1>

      <div className="inner-page__content">
        <p>
          Art has been an integral part of my life, shaping my creative journey
          in profound ways. During my Fine Art degree, I explored various
          disciplines, from film making and photography to painting and drawing,
          each leaving a lasting impression on my artistic expression.
        </p>
        <p>
          Recently, I've enjoyed a hands-on project, crafting acoustic panels
          inspired by Jackson Pollock's style. These homemade panels serve both
          as sound insulation for my music projects and as an artistic
          expression that adds a touch of creativity to my workspace.
        </p>
      </div>
      <p>
        <img
          className="inner-page__image"
          src="/images/art1.jpg"
          alt="Jackson Pollock inspired painting - acoustic panel"
        />
      </p>

      <p>
        <img
          className="inner-page__image"
          src="/images/art2.jpg"
          alt="Jackson Pollock inspired painting - acoustic panel"
        />
      </p>
    </div>
  );
};

export default Art;
