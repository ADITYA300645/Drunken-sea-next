import Image from "next/image";
import { Inter } from "next/font/google";
import Appbar from "../../components/Appbar/Appbar";
import LandingPage from "../../components/LandingPage/LandingPage";


export default function Home() {

    return (
        <main>
            <Appbar></Appbar>
            <LandingPage></LandingPage>
        </main>
    );
}
