
import React, { useEffect, useState, useRef } from "react";
import { Editor } from "primereact/editor";
import Layout from "../../components/layout/layout";
import { Button, Input } from "antd";
import toast from "react-hot-toast";
import api, { getCurrentUser } from "../../components/axios.instance";
import { getAuth } from "firebase/auth";
import app from "../../util/firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Spin } from "antd";
import dynamic from 'next/dynamic';
import PrivateLayout from "../../components/layout/PrivateLayout";
import { Select } from "antd";
import { Form } from "antd";
import { useQuery } from "@tanstack/react-query";
import { Space } from "antd";
import { Divider } from "antd";
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
            if (!text || !image) {
                return toast.error('Please add Content and Image')
            }
            setLoading(true)
            const imageUrl = await uploadFile()

            const res = await api.post('/blog', {
                title: data.title,
                content: text,
                image: imageUrl,
                user: currentuser._id,
                tags: tags,
                category: data.category,
                desc: data.desc,
                status: currentuser?.role === 'admin' ? 'published' : 'pending'
            })
            setLoading(false)
            toast.success(res?.data?.message || 'Blog created successfully')
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
    const [options, setOptions] = useState([]);
    const { data: allTags } = useQuery({
        queryKey: ["tags"],
        queryFn: async () => {
            const tags = await api.get('/blog/tags/all')
            return tags.data
        }
    })
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const addItem = (e) => {
        e.preventDefault();
        setOptions([...options, { value: name, label: name }]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };
    useEffect(() => {
        if (allTags?.tags) {
            setOptions(allTags?.tags?.map((tag) => {
                return {
                    value: tag._id,
                    label: tag._id
                }
            }))
        }
    }, [allTags])
    // const onFinish = async (values) => {
    //     console.log('Success:', values);
    // }
    // if (loadingUser || loading) {
    //     return <Spin size="large" />
    // }
    return (
        <div className="container"
            style={{
                minHeight: '100vh'
            }}
        >

            <h2 className="mb-4">Write New Blog Here</h2>
            <Form
                layout="vertical"
                name="basic"
                onFinish={onFinish}
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
                    {/* <Input
                        placeholder="Tags"
                        size="large"
                        style={{
                            marginTop: '20px'
                        }}
                        value={tags.join(',')}
                        onChange={(e) => {
                            setTags(e.target.value.split(','))
                        }}
                    /> */}
                    <Select
                        mode="multiple"
                        size="large"
                        onChange={setTags}

                        placeholder="Select tags"
                        dropdownRender={(menu) => (
                            <>
                                {menu}
                                <Divider
                                    style={{
                                        margin: '8px 0',
                                    }}
                                />
                                <Space
                                    style={{
                                        padding: '0 8px 4px',
                                    }}
                                >
                                    <Input
                                        placeholder="Please enter Tag"
                                        ref={inputRef}
                                        value={name}
                                        onChange={onNameChange}
                                        onKeyDown={(e) => e.stopPropagation()}
                                    />
                                    <Button type="text" onClick={addItem}>
                                        Add item
                                    </Button>
                                </Space>
                            </>
                        )}
                        options={options}
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
                        Publish Blog <Spin spinning={loading} />
                    </button>
                </Form.Item>
            </Form>
        </div>
    )
}


const write = () => {
    return (
        <PrivateLayout>
            <BasicDemo />
        </PrivateLayout>
    );
};

export default write;