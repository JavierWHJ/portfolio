import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import smallLogo from '../images/logo_white_small.svg';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `inherit`,
      marginBottom: `1.45rem`,
      display: "flex",
    }}
  >
    <div
      style={{
        marginLeft: "2rem",
      }}
    >
      <Link to="/">
        <img src={smallLogo} width="120" alt="small logo"/>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
