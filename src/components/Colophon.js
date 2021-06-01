import React from "react";
import { Box, Link } from "./primitives";
import { colors } from "../tokens";

const Colophon = () => {
  return (
    <Box mx='1rem' px='1rem' py='1rem' bg={colors.standout} tc={colors.black}>
      <p>Made by Mijael Maratuech Seminario.</p>
      <br />
      <p>
        Built with <Link url='https://reactjs.org'>React</Link> and{" "}
        <Link url='https://cssinjs.org'>JSS</Link>, built and deployed with{" "}
        <Link url='https://vercel.com/'>Vercel</Link>, open sourced on{" "}
        <Link url='https://github.com/mmarat01/knowledge-base'>GitHub</Link>.
      </p>
      <br />
      <p>
        I did this little thing here where my primitive components are mostly
        styled via props (e.g. mx, my, bg...). I discovered this method by first
        looking at <Link url='https://stitches.dev'>Stitches</Link>, and then{" "}
        <Link url='https://styled-system.com'>Styled System</Link>.
      </p>
      <br />
      <p>
        For the actual content, I'm planning on using{" "}
        <Link url='https://mdxjs.com'>MDX</Link>.
      </p>
      <br />
      <p>We'll see!</p>
    </Box>
  );
};

export default Colophon;
