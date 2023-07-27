import { Dispatch, useEffect } from "react"
import Button from "../../Button"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../../action/product"


const Product = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { products, isLoading, error } = useSelector((state: any) => state.products)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    return (

        <div className="product">
            <div className="title">
                Latest Product
            </div>
            <div className="list">
                {products?.map((item: any) => {
                    return (<div key={item.id} className="item mt-4 ">

                        <div className="small-item">

                            <div className="sale-off  text-light rounded-xl  bg-red-500 text-xl">- {Math.floor((item?.sale - item.price) / item?.sale * 100)}%</div>
                            <div className="img">
                                <img src={item?.image} alt="" />
                            </div>
                            <div className="back">
                                <a href="">{item?.name}</a>
                                <div className="statr">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>

                                </div>
                                <div className="flex justify-between ">
                                    <div className="price">
                                        <div className="sale"><del>{item?.sale}</del></div>
                                        <div className="">${item?.price}</div>
                                    </div>
                                    <div className="button">
                                        <Button>Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}

                {/* <div className="item">
                    <div className="small-item">
                        <div className="img">
                            <img src="https://prestashop17.joommasters.com/koganic/img/p/8/9/7/897-home_default_410x410.jpg" alt="" />
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
    )
}

export default Product