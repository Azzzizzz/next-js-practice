import Layout2 from "@/components/Layout2";
import styles from "@/styles/Home.module.css"
import Link from "next/link";

const Home = () => {
  return (
    <Layout2>
      <div>
        <h1 className={styles.title} >Homepage</h1>
        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste neque cupiditate corporis error veritatis sequi, quisquam sit fugiat iure ut voluptas? In dignissimos officia quod nemo, impedit illum iste.</p>
        <Link href="/practice/ninjaListing"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </Layout2>
  );
};

export default Home;
