import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <Head>
        <title> zyzz </title>
      </Head>
      <nav>

        <div className="logo">

          <Image width={128} height={77} src="/../public/images/sample/event1.jpg" />

        </div>

        <Link href="/practice">Home</Link>
        <Link href="/practice/about">
          <a>About</a>
        </Link>
        <Link href="/practice/ninjaListing">Ninja Listing</Link>
      </nav>
    </>
  );
};

export default Navbar;
