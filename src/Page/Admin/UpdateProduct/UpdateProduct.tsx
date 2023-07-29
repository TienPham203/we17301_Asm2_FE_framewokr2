import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { useEffect } from "react"
import { fetchOneProduct } from "../../../action/product"
import { Form, Input } from "antd"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "antd"
import { instance } from "../../../axios/config"
const UpdateProduct = () => {

    const dispatch: Dispatch<any> = useDispatch()
    const { products, isLoading } = useSelector((state: any) => state.products)
    const navigate = useNavigate()
    const { _id }: any = useParams()
    useEffect(() => {
        const fetchOneProduct = (_id: any) => async (dispatch: any) => {

            try {
                const { data } = await instance.get(`products/${_id}`)
                await dispatch({ type: "product/fetchOne", payload: data })




            } catch (error: any) {
                // await dispatch({ type: "product/fetchingErrror", payload: error.message })
            } finally {
                // await dispatch({ type: "product/fetchingFinally" })
            }
        }
        fetchOneProduct(_id)
    }, [])

    const onUpdate = async (product: any) => {
        try {

            const data = await instance.put(`products/${products._id}`, product)
            dispatch({ type: 'product/update', payload: data })
        } catch (error) {

        }
    }
    const [form] = Form.useForm();
    form.setFieldsValue({
        _id: products?._id,
        name: products?.name,
        price: products?.price,
        image: products?.image,
        desc: products?.desc,
        // categoryId: products?.categoryId
    })
    const onFinish = (values: any) => {
        onUpdate(values)
        navigate('/admin/products')
        alert(" Update thành công")
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <h1>Product Update</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }
                }
                form={form}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label=""
                    name="_id"
                    style={{ display: 'none' }}
                    rules={[{ required: true, message: '' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Nhập tên vàooooooo' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Nhập giá vàooooooooooo' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Thêm ảnh vàooooooooooo' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Desc"
                    name="desc"
                    rules={[{ required: true, message: 'Nhập desc' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Sale"
                    name="sale"
                    rules={[{ required: true, message: 'Nhập sale vàooooooooooo' }]}
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item
                    label="Category"
                    name="categoryId"
                    rules={[{ required: true, message: 'Nhập danh mục vào' }]}
                >
                    <select name="" id="">
                        ${props.category.map((item: any) => {
                            return <option value={item._id}  >{item.name}</option>

                        })}

                    </select>

                </Form.Item> */}


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        </div>
    )
}

export default UpdateProduct