import Product from "./Product"
import Service from "./Service"
import Comment from "./comment/comment"
import Marketing from "./mkt"
import Slogan from "./slogan"
import Uudai from "./uudai/Uudai"


const Content = () => {
    return (
        <div className="content">

            <div className="service">
                <Service></Service>
            </div>
            <div className="slogan">
                <Slogan></Slogan>
            </div>
            <div className="product">
                <Product></Product>
            </div>
            <div className="mkt">
                <Marketing />
            </div>
            <div className="comment">
                <Comment />
            </div>
            <div className="uudai">
                <Uudai />
            </div>
        </div>
    )
}

export default Content