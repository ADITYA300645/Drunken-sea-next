import React, { useRef } from "react";
import WineCard from "../WineCard/WineCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function Section({ tagline, discription }) {
    const arr = [
        {
            Price: 999,
            WineName: "Maza",
            WineType: "Mango",
            imageUrl:
                "https://cdn.pixabay.com/photo/2014/12/12/22/08/glass-565914_1280.jpg",
            key: 0,
        },
        {
            Price: 999,
            WineName: "Maza",
            WineType: "Mango",
            imageUrl:
                "https://cdn.pixabay.com/photo/2020/06/21/02/31/wine-5323009_1280.jpg",
            key: 1,
        },
        {
            Price: 999,
            WineName: "Maza",
            WineType: "Mango",
            imageUrl:
                "https://cdn.pixabay.com/photo/2018/02/25/11/17/wine-3180220_1280.jpg",
            key: 2,
        },
        {
            Price: 999,
            WineName: "Maza",
            WineType: "Mango",
            imageUrl:
                "https://cdn.pixabay.com/photo/2018/01/19/17/44/wine-3092944_1280.jpg",
            key: 3,
        },
        {
            Price: 999,
            WineName: "Maza",
            WineType: "Mango",
            imageUrl:
                "https://cdn.pixabay.com/photo/2020/06/21/02/31/wine-5323009_1280.jpg",
            key: 4,
        },
        {
            Price: 999,
            WineName: "Maza",
            WineType: "Mango",
            imageUrl:
                "https://cdn.pixabay.com/photo/2018/02/25/11/17/wine-3180220_1280.jpg",
            key: 5,
        },
        {
            Price: 999,
            WineName: "Maza",
            WineType: "Mango",
            imageUrl:
                "https://cdn.pixabay.com/photo/2018/01/19/17/44/wine-3092944_1280.jpg",
            key: 6,
        },
        {
            Price: 999,
            WineName: "Maza",
            WineType: "Mango",
            imageUrl:
                "https://cdn.pixabay.com/photo/2020/06/21/02/31/wine-5323009_1280.jpg",
            key: 7,
        },
        {
            Price: 999,
            WineName: "Maza",
            WineType: "Mango",
            imageUrl:
                "https://cdn.pixabay.com/photo/2018/02/25/11/17/wine-3180220_1280.jpg",
            key: 8,
        },
    ];

    const scrollRef = useRef(null);
    const handleClick = () => {
        console.log(scrollRef)
        scrollRef.current?.lastElementChild.scrollIntoView({ behavior: "smooth",block: 'nearest', inline: 'center'});
    };

    return (
        <div className="pl-4 pr-1 my-4 relative ">
            <h2 className="text-3xl font-bold text mt-6 mx-3">{tagline}</h2>
            <h3 className="text-sm text mb-5 mx-3">{discription}</h3>
            <div className="flex overflow-x-auto snap-x scrollbar-hide" ref={scrollRef}>
                {arr.map((item) => (
                    <WineCard 
                        key={item.key} 
                        imageUrl={item.imageUrl} 
                        WineName={item.WineName} 
                        WineType={item.WineType} 
                        Price={item.Price} 
                    />
                ))}
            </div>
            <button className="absolute right-0 bg-slate-600 bg-opacity-65 py-8 px-4 top-[40%]" onClick={handleClick}>
                <Image src="assets/Next.svg" width={20} height={20}></Image>
            </button>
        </div>
    );
}

export default Section;
