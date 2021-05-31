import React from "react";
import { Box, Paragraph, List } from "./primitives";
import { colors } from "../tokens";

const Music = () => {
  return (
    <Box
      mx='1rem'
      my='1rem'
      px='1rem'
      py='1rem'
      bg={colors.primary}
      tc={colors.white}>
      Music section
    </Box>
  );
};

export default Music;
