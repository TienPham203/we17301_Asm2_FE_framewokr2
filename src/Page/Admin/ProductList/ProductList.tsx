import { Dispatch, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../../Component/Button"
import { fetchProduct } from "../../../action/product"

import { instance } from "../../../axios/config"
import { pause } from "../../../pause/pause"
import { Link } from "react-router-dom"


const ProductListAdmin = () => {

    const dispatch: Dispatch<any> = useDispatch()
    const { products, isLoading, error } = useSelector((state: any) => state.products)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    const onRemove = async (_id: any) => {
        try {
            await pause(1200)
            if (confirm('Có muốn xóa ?') == true) {
                const product = await instance.delete(`/products/${_id}`)
                dispatch({ type: 'product/delete', payload: product })
                dispatch(fetchProduct())
                alert("Đã xóa")
            }
            else {
                alert("Đã hủy xóa")
            }


        } catch (error) {

        }
    }

    if (isLoading) return <div id="loader">
        <div className="ls-particles ls-part-1"></div>
        <div className="ls-particles ls-part-2"></div>
        <div className="ls-particles ls-part-3"></div>
        <div className="ls-particles ls-part-4"></div>
        <div className="ls-particles ls-part-5"></div>
        <div className="lightsaber ls-left ls-green"></div>
        <div className="lightsaber ls-right ls-red"></div>
    </div>
    if (error) return <div>{error}</div>;
    return (
        <div className="productadmin bg-white">
            <h1 className="text-center text-dark">Products Maneger</h1>
            <table className=" container table text-dark border">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Sale</th>
                        <th>Image</th>
                        <th>Des</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item: any, index: any) => {
                        return <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><del>{item.sale}</del></td>
                            <td><img style={{ width: '100px' }} src={item.image} alt="" /></td>
                            <td>{item.desc}</td>
                            <td>{item.star}</td>
                            <td>
                                <Button type="danger" onClick={() => onRemove(item._id)}><i className="fa-solid fa-trash"></i></Button>
                                <Button type="primary"><Link to={`/admin/product/${item?._id}`}><i className="fa-solid fa-wrench text-light"></i></Link></Button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

            <Button type="primary"> <a href="/admin/addproduct"><i className="text-light fa-solid fa-plus"></i></a></Button>
        </div>

    )
}

export default ProductListAdmin