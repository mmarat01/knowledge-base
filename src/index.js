import React from "react";
import { render } from "react-dom";
import { createUseStyles } from "react-jss";

import { colors } from "./tokens";

import Box from "./components/Box";

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
    },
    body: {
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
  useStyles(colors);
  return (
    <div className='App'>
      <Box px='2rem' py='1rem' bg={colors.light} tc={colors.black}>
        <p>
          Hi there how are you my name is Mijael and this is my knowledge base
          -- or at least something like it.
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
      <Box
        mx='3rem'
        my='2rem'
        px='1rem'
        py='1rem'
        bg={colors.primary}
        tc={colors.white}>
        <p>
          This is where I suppose the intro description to this little project
          will be.
        </p>
        <br />
        <p>
          A brief thing about my motivations and some of the content i guess.
        </p>
      </Box>
      <Box
        mx='1rem'
        my='1rem'
        px='1rem'
        py='1rem'
        bg={colors.standout}
        tc={colors.white}>
        <p>This is where i want the table of contents to be.</p>
        <br />
        <p>
          {" "}
          A list of all the sections, although i'm considering having a search
          box as well. idk.
        </p>
      </Box>
      <Box
        mx='3rem'
        my='2rem'
        px='1rem'
        py='1rem'
        bg={colors.secondary}
        tc={colors.black}>
        Life section
      </Box>
      <Box
        mx='1rem'
        my='1rem'
        px='1rem'
        py='1rem'
        bg={colors.primary}
        tc={colors.white}>
        Software section
      </Box>
      <Box
        mx='3rem'
        my='2rem'
        px='1rem'
        py='1rem'
        bg={colors.secondary}
        tc={colors.black}>
        Design section
      </Box>
      <Box
        mx='1rem'
        my='1rem'
        px='1rem'
        py='1rem'
        bg={colors.primary}
        tc={colors.white}>
        Music section
      </Box>
      <Box
        mx='3rem'
        my='2rem'
        px='1rem'
        py='1rem'
        bg={colors.secondary}
        tc={colors.black}>
        Miscellaneous section
      </Box>
      <Box
        mx='1rem'
        my='1rem'
        px='1rem'
        py='1rem'
        bg={colors.standout}
        tc={colors.white}>
        <p>Made by Mijael Maratuech Seminario.</p>
        <br />
        <p>
          Built with React and JSS, deployed with and to Vercel, open sourced on
          GitHub.
        </p>
        <br />
        <p>
          I did this little thing here where my primitive components are mostly
          styled via props (e.g. mx, my, bg...). I discovered this method first
          by looking at stitches, and then styled system. Cool stuff!
        </p>
      </Box>
      <Box mt='2rem' py='2rem' bg={colors.light} align='center'>
        June 2021 - X
      </Box>
    </div>
  );
};

render(<App />, document.querySelector("#root"));
