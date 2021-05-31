import React from "react";
import { Box, Paragraph, List } from "./primitives";
import { colors } from "../tokens";

const Footer = () => {
  return (
    <Box mt='2rem' py='2rem' bg={colors.light} align='center'>
      June 2021 - X
    </Box>
  );
};

export default Footer;
