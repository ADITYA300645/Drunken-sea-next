import Image from "next/image";
import React from "react";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { useSelector } from "react-redux";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const poppins600 = Poppins({ subsets: ["latin"], weight: "600" });

function Appbar() {
    var isAuth = useSelector((state) => state.auth);
    console.log(isAuth);
    return (

            <div className="text-[#1F7A8C] h-12 shadow shadow-[#1F7A8C] flex place-content-between px-4  items-center">
                <div className="flex items-center">
                    <Image
                        className="rounded-full"
                        src={"/Logo/Logo-500.png"}
                        width={36}
                        height={36}
                    ></Image>
                    <div className={poppins600.className}>
                        <div className="mx-2 text-[#1f7a8c] text-[1.25rem]">
                            Drunken Sea
                        </div>
                    </div>
                </div>

                <div className="[&>*]:mx-4 text-[14px]">
                    <Link href="/Collections">Collections</Link>
                    <Link href="/Celebration">Celebration</Link>
                    <Link href="/Explore">Explore</Link>
                    <Link href="/Branches">Branches</Link>
                    {isAuth.isAuth ? (
                        <Link
                            className="border border-gray-700 p-1 [&>*]:mx-1 rounded-3xl inline-flex align-middle items-center justify-between"
                            href={"OK"}
                        >
                            <div className="">
                                <Image
                                    className="rounded-full inline"
                                    src={"/Logo/Logo-500.png"}
                                    width={30}
                                    height={30}
                                ></Image>
                            </div>
                            <div className="inline">Account</div>
                        </Link>
                    ) : (
                        <>Sign Up</>
                    )}
                </div>
            </div>
    );
}

export default Appbar;
