import Image from "next/image";
import logo from '@/components/logo.webp'
import Link from "next/link";
import {ShoppingCart} from "lucide-react"

function Header() {
    return (
        <div className="flex justify-between items-center px-20 py-8 flex-1">
            <Link href={'/'}>
            <Image src={logo} alt="logo" height={25}/>
            </Link>
            <ul className="flex gap-x-10 text-lg">
                <li>
                    <Link href={"/category/female"}>Female</Link>
                </li>
                <li>
                    <Link href={"/category/male"}>Male</Link>
                </li>
                <li>
                    <Link href={"/category/kids"}>Kids</Link>
                </li>
                <li>
                    <Link href={"/products"}>All Products</Link>
                </li>
            </ul>
            <div className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
                <ShoppingCart/>
            </div>
        </div>
     );
}

export default Header;