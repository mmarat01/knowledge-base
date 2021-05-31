import React from "react";
import Box from "./primitives/Box";
import { colors } from "../tokens";

const Miscellaneous = () => {
  return (
    <Box
      mx='3rem'
      my='2rem'
      px='1rem'
      py='1rem'
      bg={colors.secondary}
      tc={colors.black}>
      Miscellaneous section
    </Box>
  );
};

export default Miscellaneous;