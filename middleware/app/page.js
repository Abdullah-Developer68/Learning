import Link from "next/link";
export default function Home() {
  return (
    <>
      <nav className="navbar p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* <li>
            <Link href="/redirect">Redirect</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
