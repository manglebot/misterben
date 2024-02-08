const Website = () => {
  return (
    <div className="inner-page">
      <h1 className="inner-page__title">Website Design</h1>

      <div className="inner-page__content">
        <p>
          As a dedicated web designer, I have spent years refining my skills in
          creating visually captivating websites. My expertise lies in design,
          complemented by a working knowledge of coding, which allows me to
          bring my designs to life.
        </p>
        <p>
          Throughout my web design career, I have had the opportunity to work on
          various exciting projects. One notable example is my work with B'Spoke
          Coffee, where I successfully developed an e-commerce site, overseeing
          the design and implementation process.
        </p>
      </div>

      <h2>B'Spoke Coffee Redesign 2022</h2>

      <div className="inner-page__content">
        <h3>Three Unique Websites, One Designer</h3>
        <p>
          B'Spoke Coffee's digital journey underwent three distinct phases, and
          I was at the helm of all three projects. The first iteration involved
          a cost-effective approach using an off-the-shelf free WordPress theme,
          which I tweaked and customized to establish a fully functional website
          and blogging platform for the new company.
        </p>

        <p>Original site:</p>
        <p className="caption">
          <img
            className="inner-page__image"
            src="/misterben/src/assets/images/bspoke_screenshots.jpg"
            alt="Screenshots of B'spoke's original website"
          />
        </p>

        <p>
          For the second special Christmas site, I drew inspiration from
          designer{" "}
          <a href="http://www.adiwright.co.uk" target="_blank">
            Adi Wright
          </a>
          's new logo for B'spoke and rough concept to create a distinctive and
          engaging site using WooCommerce within WordPress. Although it was my
          first time building a WooCommerce site, the result was a resounding
          success.
        </p>

        <p>
          Adi's Supplied concept below, along with a rough drawing from Nick at
          B'spoke
        </p>
        <p>
          <img
            className="inner-page__image"
            src="/misterben/src/assets/images/bspoke_concept_2019+drawing.jpg"
            alt="B'spokes xmas concepts"
            // className="caption"
          />
        </p>

        <p>
          Here is how it turned out (screenshot so not showing header or footer)
        </p>
        <p>
          <img
            className="inner-page__image"
            src="/misterben/src/assets/images/bspoke_xmas.jpg"
            alt="B'spoke Christmas website screenshot"
            // className="caption"
          />
        </p>

        <p>
          The third site was a creative combination of the previous Christmas
          site, innovative design concepts from local artist Pip Claffay -{" "}
          <a href="https://www.rune-creative.co.uk" target="_blank">
            https://www.rune-creative.co.uk
          </a>
          , and my own contribution. The design drew inspiration from Pip's
          dripping graphic, which I transformed into a dynamic visual element.
          For a touch of fun and personality, I animated one of Pip's bicycle
          graphics using the GSAP javascript animation library, which reacts to
          users scrolling.
        </p>

        <p>
          With WooCommerce as the backbone, I applied custom requests, such as
          free postage over &pound;25 (excluding subscriptions) and offered
          lessons on how B'Spoke could update the website themselves. The end
          result was a clean and functional shop interface that showcases their
          products effectively.
        </p>

        <p>
          B'Spoke Coffee love their website; you can check it out at{" "}
          <a href="http://bspokecoffeehouse.co.uk">bspokecoffeehouse.co.uk</a>.
        </p>

        <p>Pip's concepts.</p>
        <p>
          <img
            className="inner-page__image"
            src="/misterben/src/assets/images/rune_concepts.png"
            alt="Rune Creative's B'spoke Coffee website concept"
            // className="caption"
          />
          <img
            className="inner-page__image"
            src="/misterben/src/assets/images/rune_header_idea.png"
            alt="Rune Creative's header idea"
            // className="caption"
          />
        </p>
        <p>Early mockups. All too busy.</p>
        <p>
          <img
            className="inner-page__image"
            src="/misterben/src/assets/images/bspoke_layout_ideas.jpg"
            alt="My initial mockups for B'spoke Coffee"
            // className="caption"
          />
        </p>
        <p>Final simplified dripping graphic.</p>
        <p>
          <img
            className="inner-page__image"
            src="/misterben/src/assets/images/bspoke_header.png"
            alt="dripping header graphic"
            // className="caption"
          />
        </p>
        <p>
          For the homepage I removed everything except the logo, and added a
          menu. Below is the tablet view.
        </p>
        <p>
          <img
            className="inner-page__image"
            src="/misterben/src/assets/images/bspoke_homepage.jpg"
            alt="bspoke website homepage"
            // className="caption"
          />
        </p>
        <p>
          I put some of Pip's original graphics in the footer of the desktop
          site (instagram feed shown above).
        </p>
        <p>
          <img
            className="inner-page__image"
            src="/misterben/src/assets/images/bspoke_footer.jpg"
            alt="bspoke website footer"
            // className="caption"
          />
        </p>
      </div>
    </div>
  );
};

export default Website;
