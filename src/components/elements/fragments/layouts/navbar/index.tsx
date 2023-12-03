import styles from './navbar.module.css';

const NavbarComponent = () => {
   return (
      <div className={styles.navbar}>
         <div className='navbar__logo'>
            <p>LOGO</p>
         </div>
         <div className={styles.navbar__menu}>
            <ul>
               <li>
                  <a href='#'>Home</a>
               </li>
               <li>
                  <a href='#'>About</a>
               </li>
               <li>
                  <a href='#'>Contact</a>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default NavbarComponent;