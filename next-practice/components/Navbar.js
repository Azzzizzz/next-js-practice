import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>zyzz.</h1>
      </div>

      <Link href="/practice">Home</Link>
      <Link href="/practice/about">
        <a>About</a>
      </Link>
      <Link href="/practice/ninjaListing">Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
