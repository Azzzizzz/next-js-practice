import Link from "next/dist/client/link"
import styles from '../styles/Footer.module.css'

const Footer = () => {
   return (
      <footer className={styles.footer}>

         <p>Copyright &copy; Next JS Events </p>
         <Link href='/about'>About this project</Link>

      </footer>
   )
}

export default Footer
