import React from "react";
import Box from "./primitives/Box";
import { colors } from "../tokens";

const Design = () => {
  return (
    <Box
      mx='3rem'
      my='2rem'
      px='1rem'
      py='1rem'
      bg={colors.secondary}
      tc={colors.black}>
      Design section
    </Box>
  );
};

export default Design;
