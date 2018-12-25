
ReactDOM.render(
  <div className="wrapper">
    <h2>Hello, if you like us, press the button : </h2><LikeButton />
    <h2>Otherwise: </h2><User />
  </div>,
  document.querySelector('#like_button_container')
);
