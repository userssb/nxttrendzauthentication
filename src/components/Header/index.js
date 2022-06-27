import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-head">
    <div className="nav-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="logo"
      />
      <div className="list-btn-cont">
        <ul className="list-cont">
          <li className="item">
            <Link to="/" className="link-item">
              Home
            </Link>
          </li>
          <li className="item">
            <Link to="/products" className="link-item">
              Products
            </Link>
          </li>
          <li className="item">
            <Link to="cart" className="link-item">
              Cart
            </Link>
          </li>
        </ul>
        <button type="button" className="btn-logout">
          Logout
        </button>
      </div>
    </div>
  </nav>
)
export default Header
