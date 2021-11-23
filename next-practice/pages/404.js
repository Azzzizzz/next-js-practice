import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

const PageNotFound = () => {
   return (
      <Layout title="Page Not Found">

         <div className={styles.error}>

            <div className={styles.icon}>
               <FaExclamationTriangle />
            </div>
            <h1>404</h1>
            <h4> Sorry, there is nothing here</h4>
            <Link href='/'>Go Back To Home Page</Link>
         </div>


      </Layout>
   )
}

export default PageNotFound
