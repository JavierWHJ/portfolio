import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Header.module.scss"
import smallLogo from "../../images/logo_white_small_lg.svg"
import Headroom from "react-headroom"

const Header = ({ siteTitle }) => {
  const goToResume = () => {
    window.open("/resume.pdf")
  }

  return (
    <Headroom>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={smallLogo} width="80" alt="small logo" />
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
          <button onClick={goToResume}>Resume</button>
        </div>
      </header>
    </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
