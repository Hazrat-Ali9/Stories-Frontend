import Link from "next/link";
import React, { useState, useEffect } from "react";
import api from "../axios.instance";
import toast from "react-hot-toast";
const Search = () => {
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
    return (
        <>
            <div className="main-search-form">
                <div className="container">
                    <div className=" pt-50 pb-50 ">
                        <div className="row mb-20">
                            <div className="col-12 align-self-center main-search-form-cover m-auto">
                                <p className="text-center">
                                    <span className="search-text-bg">Search</span>
                                </p>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        window.location.href = `/blogs?tag=${e.target[0].value}`
                                    }}
                                    className="search-header">
                                    <div className="input-group w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search stories, places and people"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-search bg-white"
                                                type="submit"
                                            >
                                                <i className="elegant-icon icon_search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-80 text-center">
                            <div className="col-12 font-small suggested-area">
                                <h5 className="suggested font-heading mb-20 text-muted">
                                    {" "}
                                    <strong>Suggested keywords:</strong>
                                </h5>
                                <ul className="list-inline d-inline-block">
                                    {
                                        categories?.map((item, index) => (
                                            <li className="list-inline-item" key={index}>
                                                <a href={`/category/${item?.name}`}><a>{item?.name}</a></a>
                                            </li>
                                        ))
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-80">
                            <div className="col-lg-4">
                                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <Link href="/single"><a className="color-white">
                                            <img
                                                src="/assets/imgs/news/thumb-2.jpg"
                                                alt=""
                                            />
                                        </a></Link>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6>
                                            {" "}
                                            <Link href="/category"><a>Travel Tips</a></Link>{" "}
                                        </h6>
                                        <p className="text-muted font-small">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <Link href="/single"><a className="color-white">
                                            <img
                                                src="/assets/imgs/news/thumb-4.jpg"
                                                alt=""
                                            />
                                        </a></Link>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6>
                                            {" "}
                                            <Link href="/category"><a>Lifestyle</a></Link>{" "}
                                        </h6>
                                        <p className="text-muted font-small">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6">
                                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <Link href="/single"><a className="color-white">
                                            <img
                                                src="/assets/imgs/news/thumb-3.jpg"
                                                alt=""
                                            />
                                        </a></Link>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6>
                                            {" "}
                                            <Link href="/category"><a>Hotel Review</a></Link>{" "}
                                        </h6>
                                        <p className="text-muted font-small">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Search;