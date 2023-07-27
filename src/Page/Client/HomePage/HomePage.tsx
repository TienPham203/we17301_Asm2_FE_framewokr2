
import Footer from '../../../Component/Footer/footer'
import Header from '../../../Component/header'
import { Outlet } from "react-router-dom"


const HomePage = () => {
    return (
        <div className="containers">
            <div className=""><Header></Header></div>
            <div><Outlet /></div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HomePage