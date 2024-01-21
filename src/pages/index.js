import Image from "next/image";
import { Inter } from "next/font/google";
import Appbar from "@/components/Appbar/Appbar";
import LandingPage from "@/components/LandingPage/LandingPage";
import { useDispatch } from "react-redux";
import { login } from "@/features/authSlice";

export default function Home() {
    const dispatch = useDispatch();
    return (
        <main>
            <Appbar></Appbar>
            <LandingPage></LandingPage>
            <button
                className="fixed bottom-6 right-6 bg-slate-600 px-4 py-2 rounded-xl text-white"
                onClick={()=>dispatch(login())}
            >
                Explore
            </button>
            <div className="h-96 w-max bg-red-500"/>
        </main>
    );
}
