
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { instance } from '../../../axios/config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'



const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
const AddProduct = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    const onFinish = (values: any) => {
        onAdd(values)
        navigate('/admin')



        alert('')
    };
    const dispatch: Dispatch = useDispatch()
    // const { products, error, isLoading } = useSelector((state: any) => state.products)



    const onAdd = async (product: any) => {
        try {
            const data = await instance.post('products', product)
            dispatch({ type: 'product/add', payload: data })

        } catch (error) {

        }
    }
    return (
        <div>
            <h1 className="text-[40px] ml-[200px]">Add Product</h1>
            <Form
                name="name  "
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: ' Chưa nhập name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Chưa nhập price!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Desciption"
                    name="desc"
                    rules={[{ required: true, message: 'Chưa nhập des!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Chưa nhập Image!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Sale"
                    name="sale"
                    rules={[{ required: true, message: 'Chưa nhập sale!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        </div>
    )
}

export default AddProduct