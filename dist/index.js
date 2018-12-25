
ReactDOM.render(React.createElement(
  "div",
  { className: "wrapper" },
  React.createElement(
    "h2",
    null,
    "Hello, if you like us, press the button : "
  ),
  React.createElement(LikeButton, null),
  React.createElement(
    "h2",
    null,
    "Otherwise: "
  ),
  React.createElement(User, null),
  React.createElement(Tick, null)
), document.querySelector('#root'));