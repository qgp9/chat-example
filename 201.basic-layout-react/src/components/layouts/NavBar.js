function NavBarSearch() {
    return (<button>Search Finko-Dev</button>);
}

function NavBarUserAvatar() {
    return (
        <div className="navbar-avata">
            <img src="img/avatar-thumb-paul9.jpeg" />
        </div>);
}

export default function NavBar() {
  return (<nav className="navbar">
      <NavBarSearch />
      <NavBarUserAvatar />
  </nav>);
}