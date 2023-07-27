import Button from "../../Button"
import Input from "../../input/input"




const Uudai = () => {
    return (
        <div className="flex items-center uudai">
            <h1>Be the first to get discount!</h1>
            <Input />
            <button >Subscribe</button>
            <div className="item">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-telegram"></i>
            </div>
        </div>
    )
}

export default Uudai