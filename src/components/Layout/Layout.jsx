import { Outlet } from "react-router-dom";
import styles from "../../styles/blocks/_main.module.css"

const Layout = () => {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  )
}

export default Layout;
