function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <img className="header__logo" src="/favicon.svg" alt="Kedvelés számláló logó" />
        <div className="header__titles">
          <h1 className="header__title">Kedvelés számláló</h1>
          <p className="header__subtitle">Szavazz a kedvenc vicceidre!</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
