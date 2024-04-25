import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import './Style.css';
function Front()
{
    return(
        <div>
            <Header />
            <section>
             <Outlet />
            </section>
            <Footer />
        </div>
    )
}

export default Front;