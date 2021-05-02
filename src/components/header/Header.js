import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Header.module.scss"
import smallLogo from '../../images/logo_white_small.svg';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <Link to="/">
        <img src={smallLogo} width="80" alt="small logo"/>
      </Link>
    </div>
    <div className={styles.navbar}>
      <Link to="/" className={styles.navlink}>
        .about()
      </Link>
      <Link to="/" className={styles.navlink}>
        .work()
      </Link>
      <Link to="/" className={styles.navlink}>
        .projects()
      </Link>
      <Link to="/" className={styles.navlink}>
        .contact()
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
