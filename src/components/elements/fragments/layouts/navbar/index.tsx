const NavbarComponent = () => {
   return (
      <div className='navbar'>
         <div className='navbar__logo'>
            <p>LOGO</p>
         </div>
         <div className='navbar__menu'>
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