import { Box, SimpleGrid, Image, Tooltip, useColorModeValue } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * DetailTile component displays a grid of small images that can be used as detail elements
 * Each image can have a tooltip and can trigger an action on click
 */
const DetailTile = ({ images, columns = 3, spacing = 4, size = "60px", onClick }) => {
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const hoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <SimpleGrid columns={columns} spacing={spacing} w="full">
      {images.map((image, index) => (
        <Tooltip key={index} label={image.tooltip || ""} placement="top" hasArrow>
          <Box
            w={size}
            h={size}
            borderWidth="1px"
            borderRadius="md"
            borderColor={borderColor}
            overflow="hidden"
            cursor={onClick ? "pointer" : "default"}
            transition="all 0.2s"
            _hover={{ transform: "scale(1.05)", bg: hoverBg }}
            onClick={() => onClick && onClick(image, index)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={image.src} alt={image.alt || `Detail ${index + 1}`} objectFit="cover" w="full" h="full" />
          </Box>
        </Tooltip>
      ))}
    </SimpleGrid>
  );
};

DetailTile.propTypes = {
  // Array of image objects with src, alt, and optional tooltip
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      tooltip: PropTypes.string,
    })
  ).isRequired,
  // Number of columns in the grid
  columns: PropTypes.number,
  // Spacing between items in the grid
  spacing: PropTypes.number,
  // Size of each tile (width and height)
  size: PropTypes.string,
  // Function to call when an image is clicked
  onClick: PropTypes.func,
};

export default DetailTile;
