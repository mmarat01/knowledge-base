import React from "react";
import Box from "./primitives/Box";
import { colors } from "../tokens";

const Colophon = () => {
  return (
    <Box
      mx='1rem'
      my='1rem'
      px='1rem'
      py='1rem'
      bg={colors.standout}
      tc={colors.black}>
      <p>Made by Mijael Maratuech Seminario.</p>
      <br />
      <p>
        Built with React and JSS, deployed with and to Vercel, open sourced on
        GitHub.
      </p>
      <br />
      <p>
        I did this little thing here where my primitive components are mostly
        styled via props (e.g. mx, my, bg...). I discovered this method first by
        looking at stitches, and then styled system. Cool stuff!
      </p>
    </Box>
  );
};

export default Colophon;
