import { Button, Input, Table } from 'antd';
import { Form } from 'antd';
import React, { useEffect, useState } from 'react';
import api from '../axios.instance';
import toast from 'react-hot-toast';

const Categorys = () => {
    const [change, setChange] = useState(null)
    const onFinish = async (values) => {
        try {
            const res = await api.post('/blog/category', values)
            toast.success(res?.data?.message || 'Category created successfully')
            setChange(res.data)
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message || 'Something went wrong')
        }
    }
    const onDelete = async (id) => {
        try {
            const res = await api.delete(`/blog/category/${id}`)
            toast.success(res?.data?.message || 'Category deleted successfully')
            setChange(res.data)
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message || 'Something went wrong')
        }
    }
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await api.get('/blog/category')
                setCategories(res?.data || [])
            } catch (error) {
                toast.error(error?.response?.data?.message || error?.message || 'Something went wrong')
            }
        }
        getCategories()
    }, [change])

    return (
        <div className='container mt-4'>
            <h2>Categorys</h2>

            <Form
                layout='vertical'
                className='mt-4'
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Category"
                    name="name"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                >
                    <Input size='large' />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>
                        Save
                    </Button>
                </Form.Item>
            </Form>
            <Table
                loading={categories.length === 0}
                dataSource={categories}
                columns={[
                    {
                        title: 'Date',
                        dataIndex: 'createdAt',
                        key: 'createdAt',
                        render: (text) => new Date(text).toLocaleDateString(),
                    },
                    {
                        title: 'Category',
                        dataIndex: 'name',
                        key: 'name',
                    },
                    {
                        title: 'Action',
                        dataIndex: 'action',
                        key: 'action',
                        render: (_, record) => <Button type="primary"
                            danger
                            onClick={() => onDelete(record?._id)}
                        >Delete</Button>,
                    }
                ]}>


            </Table>
        </div>
    );
};

export default Categorys;