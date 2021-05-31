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
        Built with{" "}
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          React
        </a>{" "}
        and{" "}
        <a href='https://cssinjs.org' target='_blank' rel='noreferrer'>
          JSS
        </a>
        , built and deployed with{" "}
        <a href='https://vercel.com/' target='_blank' rel='noreferrer'>
          Vercel
        </a>
        , open sourced on{" "}
        <a
          href='https://github.com/mmarat01/knowledge-base'
          target='_blank'
          rel='noreferrer'>
          GitHub
        </a>
        .
      </p>
      <br />
      <p>
        I did this little thing here where my primitive components are mostly
        styled via props (e.g. mx, my, bg...). I discovered this method by first
        looking at <a href='https://stitches.dev'>Stitches</a>, and then{" "}
        <a href='https://styled-system.com' target='_blank' rel='noreferrer'>
          Styled System
        </a>
        .
      </p>
      <br />
      <p>Cool stuff!</p>
    </Box>
  );
};

export default Colophon;
