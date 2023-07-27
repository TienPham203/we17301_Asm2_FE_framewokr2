import { Dispatch, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../../Component/Button"
import { fetchProduct } from "../../../action/product"
import Skeleton from "react-loading-skeleton"
import { instance } from "../../../axios/config"


const ProductListAdmin = () => {

    const dispatch: Dispatch<any> = useDispatch()
    const { products, isLoading, error } = useSelector((state: any) => state.products)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    const onRemove = async (_id: any) => {
        try {
            const product = await instance.delete(`/products/${_id}`)
            dispatch({ type: 'product/delete', payload: product })
            dispatch(fetchProduct())
        } catch (error) {

        }
    }

    if (isLoading) return <Skeleton count={3} height={35} />;
    if (error) return <div>{error}</div>;
    return (
        <div className="productadmin">
            <h1 className="text-center">Products Maneger</h1>
            <table className=" container table table-dark border">
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
                                <Button type="danger" onClick={() => onRemove(item._id)}>Xóa</Button>
                                <Button type="primary">Sửa</Button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table></div>

    )
}

export default ProductListAdmin