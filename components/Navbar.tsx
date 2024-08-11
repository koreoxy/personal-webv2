import Image from "next/image";

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
            <li>Home</li>
            <li>Project</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
