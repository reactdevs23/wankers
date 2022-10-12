import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styles from "./style.module.css";
import { useState } from "react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const data = [
    { navItem: "Home", to: "/" },
    { navItem: "Platform", to: "/platform" },
    { navItem: "App", to: "/app" },
    { navItem: "CircleJerk", to: "/circlejerk" },
    { navItem: "MORE", to: "/more" },
  ];

  return (
    <section className={styles.headers}>
      {!sidebar && (
        <>
          <img
            src="/images/topPattern.png"
            alt="#"
            className={styles.topCircle}
          />{" "}
          <img
            src="/images/topPattern.png"
            alt="#"
            className={styles.bottomCircle}
          />
        </>
      )}
      <img src="/images/logo.png" alt="#" className={styles.logo} />
      <div className={styles.navBar}>
        <div className={`${styles.navItems} ${sidebar && styles.sidebar}`}>
          {data.map((el, i) => (
            <NavLink
              end
              key={i}
              to={el.to}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navItem} ${styles.active}`
                  : `${styles.navItem}`
              }
              onClick={() => setSidebar(false)}
            >
              {el.navItem}
            </NavLink>
          ))}
        </div>
        <div className={styles.socialContainer}>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={styles.navItem}
          >
            <FaDiscord className={styles.icon} />
          </a>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={styles.navItem}
          >
            <FaTwitter className={styles.icon} />
          </a>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={styles.navItem}
          >
            <FaInstagramSquare className={`${styles.icon} ${styles.insta}`} />
          </a>
        </div>
        {sidebar ? (
          <MdClose
            className={styles.hamburger}
            onClick={() => setSidebar((prev) => !prev)}
          />
        ) : (
          <GiHamburgerMenu
            className={styles.hamburger}
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
      </div>
    </section>
  );
};

export default Header;
