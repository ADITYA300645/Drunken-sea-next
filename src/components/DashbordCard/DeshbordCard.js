import React from "react";

function DeshbordCard() {
    return (
        <div className="absolute bottom-16 right-8 overflow-hidden">
            <div className="group">
                <img
                    src={
                        "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg"
                    }
                    className="w-[421px] h-64  rounded-lg overflow-hidden"
                ></img>
                <div
                    className="absolute bottom-12 left-0 h-1
                translate-y-12
                     bg-white w-96 rounded-tr-md rounded-br-md
                      transition-all group-hover:translate-y-0"
                ></div>
                <div className="absolute bottom-5 left-2 w-96 flex justify-between translate-y-10 text-white transition-all group-hover:translate-y-2">
                    <div>Manali</div>
                    <div>-$ 999</div>
                </div>
            </div>
        </div>
    );
}

export default DeshbordCard;
