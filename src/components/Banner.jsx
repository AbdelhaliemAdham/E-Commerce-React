import React, { useContext, useEffect, useState } from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../store/ThemeContext";

function Banner() {
  const { darkMode } = useContext(ThemeContext);
  const [dark, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [darkMode]);
  return (
    <section className={dark ? styles.dark : styles.light}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h1 className={`${styles.title} ${styles.titleLarge}`}>
            Browse All Products .
            <span className="sm:block"> try our new collection</span>
          </h1>

          <p className={styles.paragraph}>
            Our New Collection is here. Check out our new products and get 20%
            off on your first purchase. Hurry up! Limited time offer.
          </p>
          <div className={styles.buttonContainer}>
            <Link className={styles.buttonPrimary} to="/allProducts">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
