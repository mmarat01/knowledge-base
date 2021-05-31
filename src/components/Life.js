import React from "react";
import { Box } from "./primitives";
import { colors } from "../tokens";

const Life = () => {
  return (
    <Box
      mx='3rem'
      my='2rem'
      px='1rem'
      py='1rem'
      bg={colors.secondary}
      tc={colors.black}>
      Life section
    </Box>
  );
};

export default Life;
