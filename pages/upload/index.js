import { useQuery } from '@tanstack/react-query';
import React from 'react';
import api from '../../components/axios.instance';
import { Spin, Table } from 'antd';
import { Image } from 'antd';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { Popconfirm } from 'antd';
import moment from 'moment/moment';
const UploadPage = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['upload'],
        queryFn: async () => {
            const res = await api.get('/upload/all')
            return res.data
        }
    })
    const deleteImage = async (id) => {
        try {
            const res = await api.put(`/upload/delete`, {
                public_id: id
            })
            refetch()
            toast.success('Image deleted successfully')
        } catch (error) {
            console.error(error)
        }
    }

    if (isLoading) {
        return <Spin fullscreen size='large' />
    }
    return (
        <div className='container mt-20'>
            <Upload
                name='image'
                action="https://blogsite-backend-one.vercel.app/api/v1/upload"
                listType="picture"
                onChange={(e) => {
                    setTimeout(() => {
                        refetch()
                    }, 1000)
                }}
            >
                <Button type="primary" icon={<UploadOutlined />}>
                    Upload
                </Button>
            </Upload>
            <Table
                className='mt-20'
                dataSource={data.resources}
                bordered
                columns={[
                    {
                        title: 'Image',
                        dataIndex: 'image',
                        key: 'image',
                        render: (_, record) => <div>
                            <Image src={record.url}
                                style={{
                                    width: '100px',
                                    objectFit: 'fill'
                                }}
                            />
                            <p 
                            style={{
                                fontSize: '12px',
                                marginTop: '7px'
                            }}
                            >
                                {moment(record.created_at).format('lll')}
                            </p>
                        </div>,
                    },
                    {
                        title: 'Format',
                        dataIndex: 'format',
                        key: 'format',
                    },
                    {
                        title: 'Link',
                        dataIndex: 'url',
                        key: 'url',
                        render: (_, record) => <div
                            style={{
                                cursor: 'pointer',
                                color: 'blue',
                                fontSize: '12px',
                            }}
                            onClick={() => {
                                navigator.clipboard.writeText(record.url)
                                toast.success('Link copied to clipboard')
                            }}
                        >{record.url}</div>,
                    },
                    {
                        title: 'Action',
                        dataIndex: 'action',
                        key: 'action',
                        render: (_, record) => <div>
                            <Popconfirm
                                title="Are you sure you want to delete this image?"
                                onConfirm={() => {
                                    deleteImage(record.public_id)
                                }}
                            >
                                <Button danger
                                >
                                    Delete
                                </Button>

                            </Popconfirm>
                        </div>,
                    }
                ]}
            />
            <Toaster />
        </div>
    );
};

export default UploadPage;