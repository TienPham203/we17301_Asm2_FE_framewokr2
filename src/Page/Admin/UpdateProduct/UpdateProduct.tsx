// import { useDispatch, useSelector } from "react-redux"

// import { Dispatch, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";
// import { instance } from "../../../axios/config";
// import { useDispatch, useSelector } from "react-redux";
// import { getOneProduct } from "../../../axios/api";

// import { Dispatch } from "redux"
// import { useEffect } from "react"
// import { fetchOneProduct } from "../../../action/product"
// import { Form, Input } from "antd"
// import { useNavigate, useParams } from "react-router-dom"
// import { Button } from "antd"
// import { instance } from "../../../axios/config"
// const UpdateProduct = () => {

//     const dispatch: Dispatch<any> = useDispatch()
//     const { products, isLoading } = useSelector((state: any) => state.products)
//     const navigate = useNavigate()
//     const { _id }: any = useParams()
//     useEffect(() => {
//         const fetchOneProduct = (_id: any) => async (dispatch: any) => {

//             try {
//                 const { data } = await instance.get(`products/${_id}`)
//                 await dispatch({ type: "product/fetchOne", payload: data })




//             } catch (error: any) {
//                 // await dispatch({ type: "product/fetchingErrror", payload: error.message })
//             } finally {
//                 // await dispatch({ type: "product/fetchingFinally" })
//             }
//         }
//         fetchOneProduct(_id)
//     }, [])

//     const onUpdate = async (product: any) => {
//         try {

//             const data = await instance.put(`products/${products._id}`, product)
//             dispatch({ type: 'product/update', payload: data })
//         } catch (error) {

//         }
//     }
//     const [form] = Form.useForm();
//     form.setFieldsValue({
//         _id: products?._id,
//         name: products?.name,
//         price: products?.price,
//         image: products?.image,
//         desc: products?.desc,
//         // categoryId: products?.categoryId
//     })
//     const onFinish = (values: any) => {
//         onUpdate(values)
//         navigate('/admin/products')
//         alert(" Update thành công")
//     };

//     const onFinishFailed = (errorInfo: any) => {
//         console.log('Failed:', errorInfo);
//     };
//     return (
//         <div>
//             <h1>Product Update</h1>
//             <Form
//                 name="basic"
//                 labelCol={{ span: 8 }}
//                 wrapperCol={{ span: 16 }
//                 }
//                 form={form}
//                 style={{ maxWidth: 600 }}
//                 initialValues={{ remember: true }}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//             >
//                 <Form.Item
//                     label=""
//                     name="_id"
//                     style={{ display: 'none' }}
//                     rules={[{ required: true, message: '' }]}
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item
//                     label="Name"
//                     name="name"
//                     rules={[{ required: true, message: 'Nhập tên vàooooooo' }]}
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item
//                     label="Price"
//                     name="price"
//                     rules={[{ required: true, message: 'Nhập giá vàooooooooooo' }]}
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item
//                     label="Image"
//                     name="image"
//                     rules={[{ required: true, message: 'Thêm ảnh vàooooooooooo' }]}
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item
//                     label="Desc"
//                     name="desc"
//                     rules={[{ required: true, message: 'Nhập desc' }]}
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item
//                     label="Sale"
//                     name="sale"
//                     rules={[{ required: true, message: 'Nhập sale vàooooooooooo' }]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 {/* <Form.Item
//                     label="Category"
//                     name="categoryId"
//                     rules={[{ required: true, message: 'Nhập danh mục vào' }]}
//                 >
//                     <select name="" id="">
//                         ${props.category.map((item: any) => {
//                             return <option value={item._id}  >{item.name}</option>

//                         })}

//                     </select>

//                 </Form.Item> */}


//                 <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//                     <Button htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form >
//         </div>
//     )
// }

// export default UpdateProduct

import { useForm } from "react-hook-form";
import { getOneProduct } from "../../../axios/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../../axios/config";

const UpdateProduct = () => {

    // const dispatch: Dispatch<any> = useDispatch()



    const [products, setProduct] = useState<any>({})
    const { _id } = useParams()
    console.log(_id);

    useEffect(() => {
        getOneProduct(_id).then(({ data }) => setProduct(data))

    }, [])
    // console.log(products);
    const navigate = useNavigate()
    const handlesubmit = async (e: any) => {
        e.preventDefault();
        try {
            await instance.put(`products/${_id}`, products)
            alert("Update thành công")
            navigate('/admin')
        } catch (error) {

        }
    }
    const handleChange = (e: any) => {
        setProduct({ ...products, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>Update Product</h1>
            <div>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input className="form-control" required name="name" onChange={handleChange} value={products.name} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input className="form-control" required value={products.price} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <img src={products.image} style={{ width: '200px' }} alt="" />
                        <input className="form-control" required value={products.image} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Sale</label>
                        <input className="form-control" required value={products.sale} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input className="form-control" required value={products.desc} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct