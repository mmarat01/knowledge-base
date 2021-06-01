import React from "react";
import { Box } from "./primitives";
import { colors } from "../tokens";

const Software = () => {
  return (
    <Box mx='1rem' px='1rem' py='1rem' bg={colors.primary} tc={colors.white}>
      Software section
    </Box>
  );
};

export default Software;
