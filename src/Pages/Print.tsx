const Print = () => {
  return (
    <div className="inner-page">
      <h1 className="inner-page__title">Print Design</h1>

      <div className="inner-page__content">
        <p>
          While the majority of my career has been in creating digital based
          works, I have had periods of creating flyers for music nights, cafes,
          and working for multiple architects in creating publicity material,
          including most recently for Metwork Architects.
        </p>

        <h2>Metropolitan Workshop</h2>

        <p>
          For a period of several months, I assisted the tender team at
          Metropolitan Workshop, a firm specializing in architecture and urban
          design. During this time, I was responsible for producing promotional
          materials and supporting documents for bids.
        </p>

        <p>
          One of my key contributions was the creation of a 140-page brochure
          showcasing the company's portfolio of housing and masterplanning
          projects.
        </p>

        <p>
          As a result of this project, I was tasked with updating the firm's
          InDesign templates to align with a new house style. To help the
          architects quickly adapt to these changes and maintain brand
          consistency, I also created a series of short training videos to
          explain exactly how the InDesign templates worked.
        </p>

        <div className="inner-page__collection">
          <img
            className="inner-page__collection-image--first"
            src="/misterben/src/assets/images/metwork_housing.jpg"
            alt="Metropolitan Workshop Housing and Masterplanning brochure"
          />
          <img
            className="inner-page__collection-image"
            src="/misterben/src/assets/images/metwork_highst.jpg"
            alt="Metropolitan Workshop brochure"
          />
          <img
            className="inner-page__collection-image"
            src="/misterben/src/assets/images/metwork_mmoc.jpg"
            alt="Metropolitan Workshop brochure"
          />
          <img
            className="inner-page__collection-image--last"
            src="/misterben/src/assets/images/metwork_transport.jpg"
            alt="Metropolitan Workshop brochure"
          />
        </div>
      </div>
    </div>
  );
};

export default Print;
