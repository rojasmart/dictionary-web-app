import PropTypes from "react";
import { Image } from "@chakra-ui/react";

const Header = ({ data }) => {
  console.log(console.log(data[0].phonetics[1].audio));

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

export default Header;

Header.propTypes = {
  data: PropTypes.string,
};
