
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import api from '../axios.instance';
import { Button, Table } from 'antd';
import { Spin } from 'antd';
import Link from 'next/link';
import { Image } from 'antd';
import moment from 'moment/moment';
import toast from 'react-hot-toast';
import { Popconfirm } from 'antd';

const Blogs = () => {
    const [status, setStatus] = React.useState('all')
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['blogs-admin', status],
        queryFn: async () => {
            const res = await api.get(`/blog${status ? `?status=${status}` : ''}`)
            return res.data
        }
    })
    const updateStatus = async (id, status) => {
        try {
            const res = await api.put(`/blog/${id}`, { status })
            toast.success('Status updated successfully')
            refetch()
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message || 'Something went wrong')
        }
    }
    const deleteBlog = async (id) => {
        try {
            const res = await api.delete(`/blog/${id}`)
            toast.success(res?.data?.message || 'Blog deleted successfully')
            refetch()
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message || 'Something went wrong')
        }
    }
    if (isLoading) {
        return <Spin />
    }
    return (
        <div className='container'>
            <h2
                className='mb-4'
            >Blogs</h2>
            <Table
                dataSource={data}
                loading={isLoading}
                columns={[
                    {
                        title: 'Name',
                        dataIndex: 'title',
                        key: 'title',
                        render: (_, record) => <Link href={`/blog/${record._id}`}>
                            <a className='d-flex align-items-center'>
                                <Image
                                    src={record.image}
                                    width={70}
                                    height={70}
                                    className='img-fluid'
                                    style={{
                                        objectFit: 'fill',
                                        borderRadius: '10%',
                                        marginRight: '10px'
                                    }}
                                />
                                <div className='d-flex flex-column ml-2'>
                                    <span>
                                        {record.title?.slice(0, 20)}..
                                    </span>
                                    <span>
                                        {moment(record.createdAt).format('dddd, MMMM Do YYYY')}
                                    </span>
                                </div>
                            </a>
                        </Link>,
                    },
                    {
                        title: 'Author',
                        dataIndex: 'author',
                        key: 'author',
                        render: (_, record) => (
                            <Link href={`/author/${record.user?._id}`}>
                                <a className='text-capitalize font-weight-semibold'>
                                    {record.user?.name}
                                </a>
                            </Link>
                        ),
                    },
                    {
                        title: <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">All</option>
                            <option value="pending">Pending</option>
                            <option value="published">Published</option>
                            <option value="rejected">Rejected</option>
                            <option value="deleted">Deleted</option>
                        </select>,
                        dataIndex: 'status',
                        key: 'status',
                        render: (_, record) => (
                            <span className='text-capitalize font-weight-semibold'>
                                {record.status}
                            </span>
                        ),
                    },
                    {
                        title: 'Edit',
                        dataIndex: 'action',
                        key: 'action',
                        render: (_, record) => (
                            <Link href={`/blog/edit/${record._id}`} >
                                <Button type="primary" size='small'>
                                    Edit
                                </Button>
                            </Link>
                        ),
                    },
                    {
                        title: 'Action',
                        dataIndex: 'action',
                        key: 'action',
                        render: (_, record) => (
                            <div>
                                <Button
                                    type="primary" size='small'
                                    onClick={() => updateStatus(record._id, 'published')}
                                >
                                    Publish
                                </Button>
                                <Button
                                    onClick={() => updateStatus(record._id, 'rejected')}
                                    size='small'
                                    type="primary"
                                    danger
                                    className='ml-2'
                                >
                                    Reject
                                </Button>

                                <Popconfirm title="Are you sure to delete this blog?"
                                    onConfirm={() => deleteBlog(record._id)}
                                >
                                    <Button
                                        size='small'
                                        type="primary"
                                        danger
                                        className='ml-2'

                                    >
                                        Delete
                                    </Button>
                                </Popconfirm>
                            </div>
                        ),
                    }
                ]}
            />
        </div >
    );
};

export default Blogs;