const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    className: "heading1",
  },
  "hello from apple :)"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
    className: "heading2",
  },
  "hello from Microsoft :)"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    className: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
