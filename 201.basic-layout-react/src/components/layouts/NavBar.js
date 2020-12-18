function NavBarSearch() {
    return (<button>Search Finko-Dev</button>);
}

function NavBarUserAvatar({user, logout}) {
    const logoutVisible = user ? 'visible' : 'hidden';
    const logoutClickHandler = e => {
        e.preventDefault();
        logout();
    }

    return (
        <>
        <div className="navbar-item" style={{visibility: logoutVisible}}>
            <button onClick={logoutClickHandler}>Logout</button>
        </div>
        <div className="navbar-avata">
            <img src="img/avatar-thumb-paul9.jpeg" />
        </div>
        </>
    );
}

export default function NavBar(props) {
  return (<nav className="navbar">
      <NavBarSearch />
      <NavBarUserAvatar user={props.user} logout={props.logout}/>
  </nav>);
}