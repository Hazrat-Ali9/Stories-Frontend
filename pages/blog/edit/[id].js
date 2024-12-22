
import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import toast from "react-hot-toast";
import api, { getCurrentUser } from "../../../components/axios.instance";
import { getAuth } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import { Spin } from "antd";
import dynamic from 'next/dynamic';

import { Select } from "antd";
import { Form } from "antd";
import PrivateLayout from "../../../components/layout/PrivateLayout";
import app from "../../../util/firebase.init";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
function BasicDemo() {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [tags, setTags] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, loadingUser] = useAuthState(getAuth(app));
    const [currentuser, setCurrentUser] = useState(null);
    const router = useRouter();
    const { id } = router.query
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['blog', id],
        queryFn: async () => {
            const res = await api.get(`/blog/${id}`)
            return res.data
        }
    })
    useEffect(() => {
        if (user) {
            getCurrentUser(user.email).then((res) => {
                setCurrentUser(res.data)
            })
        }
    }, [user])
    const uploadFile = async () => {
        try {
            const imageData = new FormData()
            imageData.append('image', image)

            const res = await api.post('/upload', imageData)
            return res.data.url
        } catch (error) {
            console.error(error)
        }
    }
    const onFinish = async (data) => {
        try {
            if (!text) {
                return toast.error('Please add Content')
            }
            setLoading(true)
            const imageUrl = image ? await uploadFile() : imagePreview

            const res = await api.put(`/blog/${id}`, {
                title: data.title,
                content: text,
                image: imageUrl,
                user: currentuser._id,
                tags: tags,
                category: data.category,
                desc: data.desc
            })
            setLoading(false)
            toast.success("Blog updated successfully")
            refetch()
        } catch (error) {
            console.error(error)
            setLoading(false)
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
    }, [])
    useEffect(() => {
        if (data) {
            setTitle(data?.title)
            setText(data?.content)
            setTags(data?.tags)
            setImagePreview(data?.image)
        }
    }, [data])
    if (isLoading) {
        return <Spin size="large" />
    }
    return (
        <div className="container"
            style={{
                minHeight: '100vh'
            }}
        >

            <h2 className="mb-4">Update Your Blog</h2>
            <Form
                layout="vertical"
                name="basic"
                onFinish={onFinish}
                initialValues={{
                    title: data?.title,
                    desc: data?.desc,
                    category: data?.category
                }}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input title!' }]}
                >
                    <Input
                        placeholder="Title"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="desc"
                    rules={[{ required: true, message: 'Please input Description!' }]}
                >
                    <Input.TextArea
                        rows={4}
                        placeholder="Short Description with max 150 characters"
                        size="large"
                        maxLength={150}
                    />
                </Form.Item>


                <Form.Item
                    label="Tags"
                >
                    <Input
                        placeholder="Tags"
                        size="large"
                        style={{
                            marginTop: '20px'
                        }}
                        value={tags.join(',')}
                        onChange={(e) => {
                            setTags(e.target.value.split(','))
                        }}
                    />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: 'Please select category!' }]}
                >
                    <Select
                        className="w-100 mt-3"
                        size="large"
                        placeholder="Select Category"
                        options={[
                            { value: '', label: 'Select Category' },
                            ...categories.map((category) => ({
                                value: category.name,
                                label: category.name
                            })),

                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Cover"
                >
                    <label
                        className="blog-cover"
                        htmlFor="cover"
                        style={{
                            backgroundImage: imagePreview ? `url(${imagePreview})` : 'none',
                            marginTop: '20px',
                            cursor: 'pointer',
                        }}
                    >
                        {
                            <div className="overlay"
                                style={{
                                    opacity: imagePreview ? 0.4 : 1
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                                    style={{
                                        width: '30px',
                                        height: '30px'
                                    }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <p>
                                    Click here to  Upload Image
                                </p>
                            </div>
                        }
                    </label>
                </Form.Item>
                <input
                    onChange={(e) => {
                        if (e.target.files[0]) {
                            setImage(e.target.files[0])
                            setImagePreview(URL.createObjectURL(e.target.files[0]))
                        }
                    }}
                    type="file" name="cover" id="cover" accept="image/*"
                    className="d-none"
                />
                {/* <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ minHeight: '500px' }} /> */}
                <Form.Item
                    label="Content"
                >
                    <JoditEditor
                        value={text}
                        //   config={config}
                        tabIndex={1}
                        onBlur={newContent => setText(newContent)}
                        onChange={newContent => setText(newContent)}
                    />
                </Form.Item>
                <Form.Item>
                    <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary btn-md mt-4">
                        Update Blog <Spin spinning={loading} />
                    </button>
                </Form.Item>
            </Form>
        </div>
    )
}



const EditBlog = () => {
    return (
        <PrivateLayout>
            <BasicDemo />
        </PrivateLayout>
    );
};

export default EditBlog;