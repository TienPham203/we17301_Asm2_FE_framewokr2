import { Outlet } from "react-router-dom"
import Footer from '../../../Component/Footer/footer'
import Header from '../../../Component/header'
import { useSelector } from "react-redux"

const HomePage = () => {

    // const { isLoading } = useSelector((state: any) => state.products)
    // if (isLoading) return <div id="loader">
    //     <div className="ls-particles ls-part-1"></div>
    //     <div className="ls-particles ls-part-2"></div>
    //     <div className="ls-particles ls-part-3"></div>
    //     <div className="ls-particles ls-part-4"></div>
    //     <div className="ls-particles ls-part-5"></div>
    //     <div className="lightsaber ls-left ls-green"></div>
    //     <div className="lightsaber ls-right ls-red"></div>
    // </div>
    return (
        <div className="containers ">
            <div className=""><Header></Header></div>

            <div><Outlet /></div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HomePage