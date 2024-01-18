import Image from "next/image";
import React from "react";

import {Poppins} from "next/font/google";
import Link from "next/link";
const poppins = Poppins({subsets: ['latin'],weight:"600"})

function Appbar() {

    return (
        
        <div className="text-[#1F7A8C] h-12 shadow shadow-[#1F7A8C] flex place-content-between px-4  items-center" >
            <div className="flex items-center">
                <Image
                    className="rounded-full"
                    src={"/Logo/Logo-500.png"}
                    width={36}
                    height={36}
                ></Image>
                <div className={poppins.className}>
                <div className="mx-2 text-[#1f7a8c] text-[1.25rem]">
                    Drunken Sea
                </div></div>
            </div>
            <div className="[&>*]:mx-4">
                <Link href="/Collections">Collections</Link>
                <Link href="/Celebration">Celebration</Link>
                <Link href="/Explore">Explore</Link>
                <Link href="/Branches">Branches</Link>
                <Link href="/Account">Account</Link>
            </div>
        </div>
        
    );
}

export default Appbar;
