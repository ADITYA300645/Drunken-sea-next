import React from "react";
import Styles from "./LandingPage.module.css";
import Image from "next/image";
import DeshbordCard from "../DashbordCard/DeshbordCard";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

function LandingPage() {
    return (
        <div className={Styles.bgCard}>
            <div className={Styles.searchBar}>
                <div className={Styles.icon}>
                    <div className={Styles.innerIcon}>
                        <div className={Styles.inner2Icon}> </div>
                    </div>
                </div>
                <input className={Styles.innerbgCard} placeholder="Search" />
                <button className={Styles.btn}>search</button>
            </div>
            <div className={poppins.className}>
                <div className={Styles.pageContent}>
                    <p className={Styles.para1}>Treat it like never before</p>
                    <p className={Styles.para2}>
                        Sip, savor, smile : the simple joy of a good beer."
                    </p>
                </div>
            </div>
            <div className={Styles.readMore}>
                    <Image
                        src={"/Logo/DownArrow.svg"}
                        height={24}
                        width={24}
                    ></Image>
                    Read More
            </div>
            <DeshbordCard></DeshbordCard>
        </div>
    );
}

export default LandingPage;
