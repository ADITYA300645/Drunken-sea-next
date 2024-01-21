import Image from "next/image";
import { Inter } from "next/font/google";
import Appbar from "@/components/Appbar/Appbar";
import LandingPage from "@/components/LandingPage/LandingPage";
import { useDispatch } from "react-redux";
import { login } from "@/features/authSlice";
import Categorical from "@/components/Recommendations/Categorical/Categorical";
import TodaysDeal from "@/components/Recommendations/TodaysDeal/TodaysDeal";
import LocationBased from "@/components/Recommendations/LocationBased/LocationBased";
import AboutUs from "@/components/About Us/AboutUs";
import Section from "@/components/Sections/Section";


import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {


    const dispatch = useDispatch();
    return (
        <main className={poppins.className}>
            <Appbar></Appbar>
            <LandingPage></LandingPage>
            <Section
                tagline={"Discover your taste"}
                discription={
                    "Indulge in this exquisite experience, where every drop is a celebration of you."
                }
            />
            <Categorical />
            <TodaysDeal />
            <LocationBased />
            <AboutUs />
            <button
                className="fixed bottom-6 right-6 bg-slate-600 px-4 py-2 rounded-xl text-white"
                onClick={() => dispatch(login())}
            >
                Explore
            </button>
            <div className="h-96 w-max bg-red-500" />
        </main>
    );
}
