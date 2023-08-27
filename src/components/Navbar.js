import React from 'react';
// import './Navbar.css'; // Uncomment this line to apply styles
import styles from '../styles/componentStyles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarMenu}>
          <div className={styles.desktopNav}>
            <header>
                <nav>
                    <div>
                        <a href='/' className={styles.logo}>
                            <h1>Gladcity Healthcare</h1>
                        </a>
                    </div>
                </nav>
                <div className={styles.buttonHolder}>
                    <a>
                        <button>Get Care Now</button>
                    </a>
                </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*
Styles in Navbar.css should look like this:

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
}

.navbar-menu {
  display: flex;
  list-style: none;
}

.navbar-item {
  margin-left: 20px;
}

.navbar-links {
  text-decoration: none;
  color: #000;
}
*/
