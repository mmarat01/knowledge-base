import React from "react";
import { Box } from "./primitives";
import { colors } from "../tokens";

const Miscellaneous = () => {
  return (
    <Box mx='3rem' px='1rem' py='1rem' bg={colors.secondary} tc={colors.black}>
      Miscellaneous section
    </Box>
  );
};

export default Miscellaneous;
