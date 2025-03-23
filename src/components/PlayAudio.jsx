import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Image } from "@chakra-ui/react";

const PlayAudio = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(data[0].phonetics[1].audio);

      // Add event listener to detect when audio ends
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }

    if (isPlaying) {
      // Stop audio
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      // Play audio
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  return (
    <Image
      style={{ cursor: "pointer" }}
      className="audio-icon"
      src={isPlaying ? "../images/icon-stop.svg" : "../images/icon-play.svg"}
      alt={isPlaying ? "Stop audio" : "Play audio"}
      onClick={handleAudio}
      boxSize="40px"
    />
  );
};

export default PlayAudio;

PlayAudio.propTypes = {
  data: PropTypes.array.isRequired,
};
