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
                className="fixed bottom-6 right-6"
                onClick={()=>dispatch(login())}
            >
                CLICK
            </button>
        </main>
    );
}
