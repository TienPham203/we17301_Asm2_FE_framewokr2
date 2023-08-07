import { Button } from "antd"
import { Dispatch, useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { getOneProduct } from "../../../axios/api"
import { useDispatch } from "react-redux"
// import { add } from "../../../Slice/cart"
const ProductDetail = () => {
    const dispacth: Dispatch<any> = useDispatch()
    const [products, setProduct] = useState<any>({})
    const { id } = useParams()
    // console.log(id);
    useEffect(() => {
        getOneProduct(id).then(({ data }) => setProduct(data)
        )
    }, [])
    // console.log(products);

    return (
        <div className="product-detail mt-3 container">

            <div className="item grid grid-cols-[600px,auto]">
                <div className="image w-[500px] h-[600px]">
                    <div><p className="sale-persent">{!products.sale ? '' : '-' + Math.floor((products?.sale - products.price) / products?.sale * 100) + '%'}</p></div>
                    <img src={products.image} alt="" />
                </div>
                <div className="detail">
                    <div className="name text-4xl font-bold">{products.name}</div>
                    <div className="price flex items-center mt-3 mb-3">
                        <del className="mr-3">{products?.sale}</del>
                        <p className="text-3xl font-bold text-red-500">${products.price}</p>
                    </div>
                    <div className="desc w-[650px] mb-10">
                        {products.desc}
                    </div>
                    <div className="addtocart">
                        <button onClick={() => dispacth(add({ ...products, quantity: 1 }))} className=" ">Add to cart</button>
                    </div>
                    <hr />
                    <div className="commit mt-[100px] ">
                        <p>100% Money back</p>
                        <p>Non-contact shipping</p>
                        <p>Free delivery for order over $200</p>
                    </div>
                    <hr />
                    <div className="share flex  ">
                        <p className="mr-10 text-gray-600">Share</p>
                        <i className="fa-brands fa-facebook mr-5 text-gray-700"></i>
                        <i className="fa-brands fa-twitter mr-5 text-gray-700"></i>
                        <i className="fa-brands fa-pinterest mr-5 text-gray-700"></i>
                    </div>
                </div>


            </div>
            <div className="detail-all">
                <div className="title ">
                    <p className="">Description</p>
                </div>
                <div className="content-detail">
                    <p>Lorem ipsum dolor sitamet consectetur adipiscing. Sed gravida justo non viverra semper, lacus odio consectetur lacus, tincidunt magna accumsan lorem. Pulvinar vulputate, magna eros maximus consequat euismod Donec vitae congue erat, et volutpat est. Phasellus scelerisque bibendum est. Ut id vulputate turpis. Praesent blandit nisllacinia pellentesque molestie nunc tellus quis purus fermentum scelerisque.</p>

                    Vivamus ut lectus lectus. Duis nec est rhoncus interdum eros facilisis fringilla eros. Duis sollicitudin urna eu orci gravida, vel ultricies dolor vehicula. Uibero egestas quis lacinia egestas acnibh. Phasellus ultricies sit amet mieu mollis. Donec vitae pharetra nibh amet dapibus nulla. Morbi ligula metus luctus vel vulputate. Duis cursus tellus fermentum scelerisque, ante lorem ornare eset molestie nunc tellus quis purus. Suspendisse scelerisque gravida pretium</div>
                <hr />
            </div>

            <div className="relate-product product">
                <h1 className="text-red-500  mb-10" >Relate Products</h1>
                <div className="list ">

                    <div className="item bg-white w-[450px]">
                        <div className="small-item bg-white border-1 border-red-300  w-[450px]">
                            <div className="img">
                                <img src="https://prestashop17.joommasters.com/koganic/img/p/8/9/7/897-home_default_410x410.jpg" alt="" />
                            </div>
                            <div className="back">
                                <a href="">Beef Fried Noodles</a>
                                <div className="statr text-gray-500">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>

                                </div>
                                <div className="flex justify-between ">
                                    <div className="price">
                                        <div className="sale"><del style={{ color: 'black' }}>$62.05</del></div>
                                        <div className="">$45.50</div>
                                    </div>
                                    <div className="button">
                                        <Button >Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item bg-white w-[450px]">
                        <div className="small-item bg-white border-1 border-red-300  w-[450px]">
                            <div className="img">
                                <img src="https://prestashop17.joommasters.com/koganic/img/p/8/9/7/897-home_default_410x410.jpg" alt="" />
                            </div>
                            <div className="back">
                                <a href="">Beef Fried Noodles</a>
                                <div className="statr text-gray-500">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>

                                </div>
                                <div className="flex justify-between ">
                                    <div className="price">
                                        <div className="sale"><del style={{ color: 'black' }}>$62.05</del></div>
                                        <div className="">$45.50</div>
                                    </div>
                                    <div className="button">
                                        <Button >Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item bg-white w-[450px]">
                        <div className="small-item bg-white border-1 border-red-300  w-[450px]">
                            <div className="img">
                                <img src="https://prestashop17.joommasters.com/koganic/img/p/8/9/7/897-home_default_410x410.jpg" alt="" />
                            </div>
                            <div className="back">
                                <a href="">Beef Fried Noodles</a>
                                <div className="statr text-gray-500">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>

                                </div>
                                <div className="flex justify-between ">
                                    <div className="price">
                                        <div className="sale"><del style={{ color: 'black' }}>$62.05</del></div>
                                        <div className="">$45.50</div>
                                    </div>
                                    <div className="button">
                                        <Button >Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="item">
                        <div className="small-item">
                            <div className="img">
                                <img src="https://prestashop17.joommasters.com/koganic/img/p/9/0/8/908-home_default_410x410.jpg " alt="" />
                            </div>
                            <div className="back">
                                <a href="">Beef Fried Noodles</a>
                                <div className="statr">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>

                                </div>
                                <div className="flex justify-between ">
                                    <div className="price">
                                        <div className="sale"><del>$62.05</del></div>
                                        <div className="">$45.50</div>
                                    </div>
                                    <div className="button">
                                        <Button >Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="small-item">
                            <div className="img">
                                <img src="https://prestashop17.joommasters.com/koganic/img/p/9/3/8/938-home_default_410x410.jpg" alt="" />
                            </div>
                            <div className="back">
                                <a href="">Beef Fried Noodles</a>
                                <div className="statr">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>

                                </div>
                                <div className="flex justify-between ">
                                    <div className="price">
                                        <div className="sale"><del>$62.05</del></div>
                                        <div className="">$45.50</div>
                                    </div>
                                    <div className="button">
                                        <Button >Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="small-item">
                            <div className="img">
                                <img src="https://prestashop17.joommasters.com/koganic/img/p/9/2/8/928-home_default_410x410.jpg" alt="" />
                            </div>
                            <div className="back">
                                <a href="">Beef Fried Noodles</a>
                                <div className="statr">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>

                                </div>
                                <div className="flex justify-between ">
                                    <div className="price">
                                        <div className="sale"><del>$62.05</del></div>
                                        <div className="">$45.50</div>
                                    </div>
                                    <div className="button">
                                        <Button >Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="small-item">
                            <div className="img">
                                <img src="https://prestashop17.joommasters.com/koganic/img/p/9/1/8/918-home_default_410x410.jpg" alt="" />
                            </div>
                            <div className="back">
                                <a href="">Beef Fried Noodles</a>
                                <div className="statr">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>

                                </div>
                                <div className="flex justify-between ">
                                    <div className="price">
                                        <div className="sale"><del>$62.05</del></div>
                                        <div className="">$45.50</div>
                                    </div>
                                    <div className="button">
                                        <Button >Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default ProductDetail