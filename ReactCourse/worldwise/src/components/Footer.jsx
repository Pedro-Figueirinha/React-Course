import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.Copyright}>
        &copy; Copyright {new Date().getFullYear()} by worldwise.inc
      </p>
    </footer>
  );
}

export default Footer;
