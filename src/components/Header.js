import React from "react";
import { Box, Link, Paragraph } from "./primitives";
import { colors } from "../tokens";

const Header = () => {
  return (
    <Box px='2rem' py='1rem' bg={colors.light} tc={colors.black}>
      <p>
        Hi there how are you my name is Mijael and this is my knowledge base --
        or at least something like it.
      </p>
      <br />
      <p>
        This design was heavily inspired by the{" "}
        <Link url='https://jamstack.wtf'>jamstack.wtf</Link> website.
      </p>
    </Box>
  );
};

export default Header;
