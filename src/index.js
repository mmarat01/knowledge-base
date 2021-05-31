import React from "react";
import { render } from "react-dom";
import { createUseStyles } from "react-jss";

import Header from "./components/Header";
import Intro from "./components/Intro";
import TableOfContents from "./components/TableOfContents";
import Life from "./components/Life";
import Software from "./components/Software";
import Design from "./components/Design";
import Music from "./components/Music";
import Miscellaneous from "./components/Miscellaneous";
import Colophon from "./components/Colophon";
import Footer from "./components/Footer";

const useStyles = createUseStyles({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      verticalAlign: "baseline",
    },
    html: {
      fontSize: 16,
      backgroundColor: "#efecec",
    },
    body: {
      overscrollBehavior: "contain",
      font: {
        size: "1rem",
        family: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
      },
      color: "#000",
      backgroundColor: "#fff",
    },
    a: {
      color: "inherit",
    },
  },
});

const App = () => {
  useStyles(); // injects global styles
  return (
    <>
      <Header />
      <Intro />
      <TableOfContents />
      <Life />
      <Software />
      <Design />
      <Music />
      <Miscellaneous />
      <Colophon />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector("#root"));
