import { Outlet } from "react-router-dom";
import { Navigation } from '../components/Navigation/nav'
import { Footer } from "../components/Footer/footer";

export const MainLayout = () => {
    return(
        <main>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </main>
    )
}