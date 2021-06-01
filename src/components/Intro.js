import React from "react";
import { Box } from "./primitives";
import { colors } from "../tokens";

const Intro = () => {
  return (
    <Box mx='3rem' px='1rem' py='1rem' bg={colors.primary} tc={colors.white}>
      <p>
        This is where I suppose the intro description to this little project
        will be.
      </p>
      <br />
      <p>A brief thing about my motivations and some of the content i guess.</p>
    </Box>
  );
};

export default Intro;
