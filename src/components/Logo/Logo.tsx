import logoImg from "./bb-logo.svg";

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  const imgSrc: string = logoImg;
  const altText: string = "Misterben Logo";

  return (
    <div id="main-logo">
      <div className="title">Ben Bayliss</div>
      <img src={imgSrc} alt={altText} height="120" />
    </div>
  );
};

export default Logo;
