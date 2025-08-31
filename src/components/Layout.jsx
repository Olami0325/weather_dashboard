import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import bgImage from "../assets/weather_bg.jpg";


function Layout(){
    return (
        <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <Header/>
            <main className="flex-grow mt-16 lg:my-5">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;