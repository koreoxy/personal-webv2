import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-5">
      <div className="bg-dark rounded-md p-2">
        <div className="flex justify-between mx-3">
          <div className="bg-light rounded-sm">
            <Image
              src="/logo.png"
              width={25}
              height={25}
              alt="logo"
              className="grayscale"
            />
          </div>
          <ul className="text-light flex gap-5">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="#project-section">
              <li>Project</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
