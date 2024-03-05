import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './style.css'

function Navbar() {
  return <nav className="navbarWrapper">
    <div className='navbarContainer'>
      <div className='navbarLogo'>
        <span className='logo'>
          YU-LP-CO
        </span>
      </div>
      <div className='rightWidget'>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  </nav>
}

export default Navbar