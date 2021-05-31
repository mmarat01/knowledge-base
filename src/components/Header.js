import React from "react";
import Box from "./primitives/Box";
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
        <a href='https://jamstack.wtf' target='_blank' rel='noreferrer'>
          jamstack.wtf
        </a>{" "}
        website. It's also the first thing i've done from scratch in React.
      </p>
    </Box>
  );
};

export default Header;
