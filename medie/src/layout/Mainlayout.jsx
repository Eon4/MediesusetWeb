import { Outlet } from "react-router-dom";
import { Navbar } from '../components/Navigation/nav'
import { Footer } from "../components/Footer/footer";
import { Hero } from "../components/Hero/hero";

export const MainLayout = () => {
    return(
        <main>
            <Navbar/>
            <Hero />

            <Outlet/>
            <Footer/>
        </main>
    )
}