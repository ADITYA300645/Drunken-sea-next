import React from "react";

function WineCard({ imageUrl, WineName, WineType, Price }) {
    return (
        <div className="w-72 mx-3 scroll-ms-6 snap-start ">
            <div className="w-72 h-96 rounded-md overflow-hidden justify-center items-center flex shadow-lg">
              <img src={imageUrl}></img>
            </div>
            <div className="flex justify-between pt-1 px-1">
                <div className="text-sm w-3/4">
                    <div className="text-base font-medium">{WineName}</div>
                    <div className="text-[12px]">{WineType}</div>
                </div>
                <div className="text-sm w-1/4 text-right text-green-600">
                    ${Price}
                </div>
            </div>
        </div>
    );
}

export default WineCard;
