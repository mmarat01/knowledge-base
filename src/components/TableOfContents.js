import React from "react";
import { Box } from "./primitives";
import { colors } from "../tokens";

const TableOfContents = () => {
  return (
    <Box
      mx='1rem'
      my='1rem'
      px='1rem'
      py='1rem'
      bg={colors.standout}
      tc={colors.black}>
      <p>This is where i want the table of contents to be.</p>
      <br />
      <p>
        {" "}
        A list of all the sections, although i'm considering having a search box
        as well. idk.
      </p>
    </Box>
  );
};

export default TableOfContents;
