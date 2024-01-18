import Image from "next/image";
import React from "react";

function Appbar() {
    return (
        <div className="text-[#1F7A8C] h-12 shadow shadow-[#1F7A8C] flex place-content-between px-4  items-center">
            <div className="flex items-center">
                <Image
                className="rounded-full"
                    src={"/Logo/Logo-500.png"}
                    width={36}
                    height={36}
                ></Image>
                <div className="mx-2 text-[#1f7a8c] font-['Poppins'] text-[1.5rem] font-semibold leading-[normal]">Drunken Sea </div>
                
            </div>
            <div>Right</div>
        </div>
    );
}

export default Appbar;
