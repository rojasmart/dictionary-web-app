import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Image, Tooltip } from "@chakra-ui/react";

const PlayAudio = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const audioRef = useRef(null);

  // Find valid audio URL in phonetics array
  const getAudioUrl = () => {
    if (!data || !data[0] || !data[0].phonetics) return null;

    // Find the first phonetic entry with a non-empty audio URL
    const phonetic = data[0].phonetics.find((p) => p && p.audio && p.audio.trim() !== "");
    return phonetic ? phonetic.audio : null;
  };

  const audioUrl = getAudioUrl();

  const handleAudio = () => {
    // Check if audio is available
    if (!audioUrl) {
      setAudioAvailable(false);
      return;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);

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
    <Tooltip label={audioAvailable ? "" : "No audio available"} isOpen={!audioAvailable} onClose={() => setAudioAvailable(true)}>
      <Image
        style={{
          cursor: audioUrl ? "pointer" : "not-allowed",
          opacity: audioUrl ? 1 : 0.5,
        }}
        className="audio-icon"
        src={isPlaying ? "../images/icon-stop.svg" : "../images/icon-play.svg"}
        alt={isPlaying ? "Stop audio" : "Play audio"}
        onClick={handleAudio}
        boxSize="40px"
      />
    </Tooltip>
  );
};

export default PlayAudio;

PlayAudio.propTypes = {
  data: PropTypes.array.isRequired,
};
