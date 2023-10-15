import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <Link href="/">
          <a className="menu">HOME</a>
        </Link>
        <Link href="/about" className="menu">
          <a className="menu">ABOUT</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          border-bottom: 5px solid #000;
        }
        .menu {
          font-size: 60px;
          font-weight: 500;
        }
        .menu:first-child {
          padding-right: 20px;
          border-right: 5px solid #000;
        }
      `}</style>
    </>
  );
}
