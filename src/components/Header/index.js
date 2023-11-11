import './index.css'

const Header = () => (
  <div className="header-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
    </div>
    <div>
      <ul className="listed-items">
        <li className="item-1">Home</li>
        <li className="item-2">Jobs</li>
      </ul>
    </div>
    <div className="button-header">
      <button className="button-logout" type="button">
        Logout
      </button>
    </div>
  </div>
)

export default Header
