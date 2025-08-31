import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


function Layout(){
    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Header/>
            <main className="flex-grow mt-16 lg:mt-20 px-4 lg:px-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;