import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
      <span className="font-bold text-lg">Simple Navbar</span>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
