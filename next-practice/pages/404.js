import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import styless from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/practice/");
    }, 3000);
  }, []);

  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <div className={styles.icon}>
          <FaExclamationTriangle />
        </div>
        <h1>404</h1>
        <h4> Sorry, there is nothing here</h4>
        <Link href="/">
          <a className={styless.btn} href="">
            Back To Home Page
          </a>
        </Link>
        <Link href="/practice/">
          <a className={styless.btn} href="">
            Back To Practice Page
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
