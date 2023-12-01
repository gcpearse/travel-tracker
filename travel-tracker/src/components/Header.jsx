const Header = ({ appHeader, appName, welcomeMsg }) => {
  return <div id="hero">
    <h1 id="app-header">{appHeader} <span id="app-name">{appName}</span></h1>
    <h2 id="welcome-msg">{welcomeMsg}</h2>
  </div>;
};

export default Header;
