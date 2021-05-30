import React from "react";
import { render } from "react-dom";
import { createUseStyles } from "react-jss";

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
    },
  },
});

const App = () => {
  const rootStyles = useStyles();
  return (
    <div className={rootStyles}>
      <p>
        hi there how are you my name is mijael and this is my knowledge base --
        or at least something like it
      </p>
      <p>built with react and jss. deployed with vercel.</p>
    </div>
  );
};

render(<App />, document.querySelector("#root"));
