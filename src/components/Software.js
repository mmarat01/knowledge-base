import React from "react";
import { Box, Paragraph, List } from "./primitives";
import { colors } from "../tokens";

const Software = () => {
  return (
    <Box
      mx='1rem'
      my='1rem'
      px='1rem'
      py='1rem'
      bg={colors.primary}
      tc={colors.white}>
      Software section
    </Box>
  );
};

export default Software;
