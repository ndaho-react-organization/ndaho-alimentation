const NavBar = () => {
    return (
        <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand crimson" to="/">   <i class="fas fa-shopping-cart"></i> Alimentation Ndaho</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ml-auto cart">
                    <div>
                        <form className="search form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search" />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar