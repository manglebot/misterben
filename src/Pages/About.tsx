const Home: React.FC = () => {
  const generateEmail = () => {
    const username = "info";
    const domain = "misterben.co.uk";
    return `${username}@${domain}`;
  };

  return (
    <div>
      <h1 className="home_title">CONTACT</h1>
      <h2 className="home_subtitle">Get in touch.</h2>
      <p>
        Feel free to get in touch. CV can be sent on request -{" "}
        <a href={`mailto:${generateEmail()}`}>{generateEmail()}</a>
      </p>
    </div>
  );
};

export default Home;
