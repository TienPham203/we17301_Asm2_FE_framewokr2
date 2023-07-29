import { Dispatch, useEffect } from "react"
import Button from "../../../Component/Button"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../../action/product"


const ProductList = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { products, isLoading, error } = useSelector((state: any) => state.products)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    return (

        <div className="product bg-dark p-4">
            <div className="title">
                Products List
            </div>
            <div className="list">
                {products?.map((item: any) => {
                    return <div key={item.id} className="item mt-4">
                        <a href={`products/${item._id}`}>
                            <div className="small-item">
                                <div className="sale-off  text-light rounded-xl  bg-red-500 text-xl"> {!item.sale ? '' : '-' + Math.floor((item?.sale - item.price) / item?.sale * 100) + '%'}</div>
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
                                            <div className="">$ {item?.price}</div>
                                        </div>
                                        <div className="button">
                                            <Button>Buy Now</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                })}

            </div>
        </div>
    )
}

export default ProductList