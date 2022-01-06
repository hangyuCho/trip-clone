import Image from 'next/image';
import styles from '../../styles/Navbar.module.css'

function Navbar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.logo}>
          <Image src="/img/trip_logo.png" alt="" height="100%" width="400%" />
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="여행지, 명소, 호텔 등으로 검색" className={styles.searchText}></input>
          <button type="button" className={styles.searchBtn}></button>
        </div>
        <div className={styles.list}>
          <ul>
            <li>App 고객센터</li>
            <li>
              <button>
                <Image src="/img/country.webp" height="100px" width="100px"></Image>
              </button>
            </li>
            <li>App 고객센터</li>
          </ul>
        </div>
        <div className={styles.loginBtn}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.menu}></div>
      </div>
    </div>
  );
}

export default Navbar;