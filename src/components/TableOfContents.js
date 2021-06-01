import React from "react";
import { Box, List } from "./primitives";
import { colors } from "../tokens";

const TableOfContents = () => {
  return (
    <Box mx='1rem' px='1rem' py='1rem' bg={colors.standout} tc={colors.black}>
      <p>This is where i want the table of contents to be.</p>
      <br />
      <p>
        {" "}
        A list of all the sections, although i'm considering having a search box
        as well. idk.
      </p>
      <List ml='2rem' my='1rem' num={true}>
        <li>hey</li>
        <li>hey</li>
        <li>hey</li>
      </List>
    </Box>
  );
};

export default TableOfContents;
