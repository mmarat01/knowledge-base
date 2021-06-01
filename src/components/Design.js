import React from "react";
import { Box } from "./primitives";
import { colors } from "../tokens";

const Design = () => {
  return (
    <Box mx='3rem' px='1rem' py='1rem' bg={colors.secondary} tc={colors.black}>
      Design section
    </Box>
  );
};

export default Design;
