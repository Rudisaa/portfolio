import './NavBar.css'

const NavBar = () => {
    return (
        <div id='nav-bar'>
            <span className="logo">Logo</span>
            <ul className="navigation">
                <li className="nav-link">home</li>
                <li className="nav-link">about</li>
                <li className="nav-link">projects</li>
            </ul>
            <ul className="navbar-socials">
                <li className="social-link">github</li>
                <li className="social-link">linkedin</li>
                <li className="social-link">get in touch</li>
            </ul>
        </div>
    )
}

export default NavBar