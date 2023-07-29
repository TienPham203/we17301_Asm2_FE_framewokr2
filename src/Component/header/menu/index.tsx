import React from 'react'



const Menu = () => {
    return (
        <div>
            <ul className="flex menu">
                <li className="p-3 text-2xl"><a href="/">Home</a></li>
                <li className="p-3 text-2xl"><a href="product-detail">About</a></li>
                <li className="p-3 text-2xl"><a href="#">Contact Us</a></li>
                <li className="p-3 text-2xl"> <a href="productlist">Products</a></li>
            </ul>
        </div>
    )
}

export default Menu