import Link from 'next/link';
import styles from './../styles/Header.module.css'

const Header = () => {
   return (
      // <div><h1>header</h1></div>
      <header className={styles.header}>
         <div className={styles.logo} >
            <Link href='/'>
               <a>Next Events</a>
            </Link>
         </div>

         <nav>
            <ul>
               <li>
                  <Link href='/events'>
                     <a>
                        Events
                     </a>
                  </Link>
               </li>
            </ul>
         </nav>

      </header>
   )
}

export default Header
