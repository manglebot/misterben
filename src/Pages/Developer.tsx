import { NavLink } from "react-router-dom";

const Developer = () => {
  return (
    <div className="inner-page">
      <h1 className="inner-page__title">WEB DEVELOPER</h1>
      <h2>I started building websites in 1997.</h2>

      <div className="inner-page__content">
        <p>
          I was lucky to start my career at Arcadia Group, creating fashion
          pages for TopMan, TopShop, Racing Green, Burton and several other
          sites. At this time, websites were very simple. No CSS, just basic
          HTML and a sprinkling of JavaScript. This started a 15 year streak of
          building and designing websites. In the very early days, I was always
          expected to do both, but after going freelance I found there were many
          jobs in website development. Highlights include Ministry of Sound - my
          first freelance job, where I was brought in to code pages and fix
          javascript errors, and Syzygy Agency who I worked for over a period of
          2 years on many projects including front end page building on sites
          like Mazda, Mercedes, Jewsons, Boots (TV site), up to senior front end
          developer (overseeing a team of junior developers) on Curry's and The
          Link websites.
        </p>

        <div className="inner-page__collection inner-page__collection-group">
          <img
            className="inner-page__collection-8-image"
            src="/misterben/assets/images/logo_topman.png"
            alt="TopMan logo"
          />
          <img
            className="inner-page__collection-8-image"
            src="/misterben/assets/images/logo_topshop.png"
            alt="TopShop logo"
          />
          <img
            className="inner-page__collection-8-image"
            src="/misterben/assets/images/logo_Ministry-of-Sound.png"
            alt="Ministry of Sound logo"
          />
          <img
            className="inner-page__collection-8-image"
            src="/misterben/assets/images/logo_Mercedes.png"
            alt="Mercedes logo"
          />
          <img
            className="inner-page__collection-8-image"
            src="/misterben/assets/images/logo_mazda.png"
            alt="Mazda logo"
          />
          <img
            className="inner-page__collection-8-image"
            src="/misterben/assets/images/logo_jewson.png"
            alt="Jewsons logo"
          />
          <img
            className="inner-page__collection-8-image"
            src="/misterben/assets/images/logo_The_Link.png"
            alt="The Link logo"
          />
          <img
            className="inner-page__collection-8-image"
            src="/misterben/assets/images/logo_currys.png"
            alt="Currys logo"
          />
        </div>

        <p>
          Not long after Syzygy, I got a full time position at the Tate Gallery,
          with primary responsibility for Tate Modern branch of the site. I
          would design and build bespoke websites for every major exhibition,
          and quite often for the smaller gallery at Tate Modern, where I would
          have more creative freedom, sometimes meeting the artist in question
          to see what they wanted for their online presence - often using this
          for my more experimental bits of coding.
        </p>

        <div className="inner-page__collection">
          <img
            className="inner-page__collection-image--first"
            src="/misterben/assets/images/tate_bacon1.jpg"
            alt="Tate Gallery - Francis Bacon Interactive"
          />
          <img
            className="inner-page__collection-image"
            src="/misterben/assets/images/tate_bacon2.jpg"
            alt="Tate Gallery - Francis Bacon Interactive"
          />
          <img
            className="inner-page__collection-image"
            src="/misterben/assets/images/tate_bacon4.jpg"
            alt="Tate Gallery - Francis Bacon Interactive"
          />
          <img
            className="inner-page__collection-image--last"
            src="/misterben/assets/images/tate_bacon5.jpg"
            alt="Tate Gallery - Francis Bacon Interactive"
          />
        </div>

        <p>
          The biggest two projects I did for Tate were an interactive exhibition
          guide for Francis Bacon website, and an even more dynamic website that
          explored the work and live of Naun Gabo. There is a page here about
          the Francis Bacon exhibition. I had to learn enough ActionScript
          (which I barely knew at the time), in order to create a site that
          would be visited by many thousands of people and therefore had to work
          perfectly, which thankfully it did, and I had amazing feedback on.
        </p>

        <p>
          More recently, I learnt WordPress in my own time, and have created a
          number of sites with this, including 3 sites for B'spoke Coffee House,
          which included a WooCommerce site. I knew nothing of how to implement
          this, but after doing research managed to create a site for the client
          on a very limited budget, which was both aesthetically pleasing, but
          financially viable. You can read more about it{" "}
          <NavLink to="/pages/website">here on my web design page</NavLink>. I'm
          not a PHP programmer, but have tweaked pages and pushed code around to
          do things I wanted.
        </p>

        <div className="inner-page__collection">
          <img
            className="inner-page__collection-image--first"
            src="/misterben/assets/images/bspoke_2022.jpg"
            alt="B'spoke Coffee Website 2022"
          />
          <img
            className="inner-page__collection-image--last"
            src="/misterben/assets/images/bspoke_screenshots.jpg"
            alt="B'spoke Coffee Website 2022"
          />
        </div>

        <p>
          Most recently (Oct 23 - Jan 24), I completed a full stack Web
          Developer course from Tech Returners. This was a refresher course,
          which after my career break looking after my children, allowed me to
          get back in touch with the coding world, and re-learn both front end
          and back end website coding with Javascript. It covered the most
          common requirements of today's code stack, including HTML, CSS (BEM,
          Tailwind), Typescript, ES6, React, Node.js, TDD, MVC, Git, JSON and
          more. I got to work both solo and in teams, and even learnt pair
          programming. It massively increased my confidence in coding and has
          reignited my desire to work again in the web development world.
        </p>

        <img
          className="inner-page__image--small"
          src="/misterben/assets/images/tech-returners-certificate.jpg"
          alt="Tech Returners Certificate"
        />

        <p>
          Oh and I also built this site (the one you're looking at right now),
          orginally in vanilla HTML, CSS and bits of JavaScript, but now
          completely rebuilt as a React site, with React Router and BEM CSS.
        </p>
      </div>
    </div>
  );
};

export default Developer;
