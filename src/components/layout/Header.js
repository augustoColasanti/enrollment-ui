import "../../assets/scss/Header.scss";

export const Header = () => (
  <header id="header" data-testid="header">
    <img src={require("../../assets/images/logo.png")} alt="logo" />
  </header>
);
