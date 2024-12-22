import { useQuery } from '@tanstack/react-query';
import { Button, Table } from 'antd';
import React from 'react';
import api from '../axios.instance';
import toast from 'react-hot-toast';
import { Avatar } from 'antd';

const Users = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await api.get('/users')
            return res.data
        }
    })
    const updateRole = async (id, role) => {
        try {
            const res = await api.put(`/users/${id}`, { role })
            toast.success('Role updated successfully')
            refetch()
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message || 'Something went wrong')
        }
    }
    return (
        <div className='container mt-20'>
            <h2>All Users</h2>
            <Table
                dataSource={data}
                loading={isLoading}
                columns={[
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name',
                        render: (name, data) => {
                            return <div>
                                <Avatar src={data?.avatar} >
                                    {name.slice(0, 1)}
                                </Avatar>
                                <span className='ml-2'>
                                    {name}
                                </span>
                            </div>
                        }
                    },
                    {
                        title: 'Email',
                        dataIndex: 'email',
                        key: 'email',
                    },
                    {
                        title: 'Role',
                        dataIndex: 'role',
                        key: 'role',
                        render: (role, data) => {
                            return <select defaultValue={role}
                                className='form-select'
                                onChange={(e) => updateRole(data._id, e.target.value)}
                            >
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        }
                    },
                    {
                        title: 'Action',
                        dataIndex: 'action',
                        key: 'action',
                        render: (_, record) => {
                            return <div>
                                <Button danger>
                                    Delete
                                </Button>
                            </div>
                        }
                    },
                ]}
                className='mt-20'
            />
        </div>
    );
};

export default Users;