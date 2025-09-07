import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar bg-gray-700">
      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        <Link href="/" className="text-lg font-bold">
          Facebook
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-black hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
