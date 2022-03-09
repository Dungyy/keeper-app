const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title ">
      <h1>Keeper</h1>
      <h4>of your memories</h4>
    </div>
    <div className="navbar__item">Post</div>
    <div className="navbar__item">Favorite</div>
    <div
      className="navbar__item"
      onClick={() => (window.location = "mailto:erickmunoz13@gmail.com")}
    >
      Help
    </div>
  </header>
);

export default NavBar;
