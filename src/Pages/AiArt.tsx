const AiArt = () => {
  return (
    <div className="inner-page">
      <h1 className="inner-page__title">AI Art</h1>

      <div className="inner-page__content">
        <p>
          This uses the idea of taking a prompt to create an initial AI image,
          and then adding other prompts to take it to new places that the AI
          wouldn't have come up with by itself, but neither would I.
        </p>
        <p>
          These are mainly done in Photoshop, making use of the program features
          to push the images further.
        </p>
      </div>

      <p>
        <img src="/src/assets/images/ai-art1.jpg" alt="AI created artworks" />
      </p>
      <p>
        <img src="/src/assets/images/ai-art2.jpg" alt="AI created artworks" />
      </p>
      <p>
        <img src="/src/assets/images/ai-art4.jpg" alt="AI created artworks" />
      </p>
      <p>
        <img src="/src/assets/images/ai-art3.jpg" alt="AI created artworks" />
      </p>
    </div>
  );
};

export default AiArt;
