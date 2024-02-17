import PropTypes from "react";
import { Image } from "@chakra-ui/react";

const PlayAudio = ({ data }) => {
  const playSound = () => {
    const audio = new Audio(data[0].phonetics[1].audio);
    audio.play();
  };

  return (
    <Image
      style={{ cursor: "pointer" }}
      className="audio-icon"
      src={"../images/icon-play.svg"}
      alt="icon"
      onClick={playSound}
    />
  );
};

export default PlayAudio;

PlayAudio.propTypes = {
  data: PropTypes.string,
};
