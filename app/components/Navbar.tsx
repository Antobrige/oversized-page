import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logow.png"

export function Navbar() {
  return(
    <nav className="max-w-7xl mx-auto md:8 py-11 px-14 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <div className="pr-[2px]">
          <Image src={Logo} alt="logow" />
        </div>
        <Link href="/">
        <h1 className="text-[15px] font-normal text-blue-50 text-center">Oversized Connect</h1>
        </Link>
      </div>
    </nav>
  );
}