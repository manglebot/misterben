import { YouTubeEmbed } from "react-social-media-embed";

const CodingForFun: React.FC = () => {
  return (
    <>
      <p>
        A personal project that I was proud of was re-writing the firmware for a
        eurorack sequencer, using Arduino, which I didn't know, but is
        thankfully very similar to JavaScript. I took the very basic code, and
        updated it to create a series of patterns from each output (instead of a
        single trigger). The original was open source, so naturally I made mine
        the same, and got some lovely feedback from other users. I later updated
        it with a v2 of my firmware with tweaks and more patterns.
      </p>

      <div className="inner-page__collection">
        <YouTubeEmbed url="https://www.youtube.com/watch?v=ljU_3NHckWM" />
      </div>
    </>
  );
};

export default CodingForFun;
