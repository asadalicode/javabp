import { Outlet } from "react-router-dom"
import Footer from "./footer";
import Header from "./navbar"

const HomeContainer = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default HomeContainer;