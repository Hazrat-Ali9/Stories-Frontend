import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/author.json";
import post from "../../data/post.json";
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from "firebase/auth";
import app from "../../util/firebase.init";
import api, { getCurrentUser } from "../../components/axios.instance";
import { Avatar } from "antd";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import BlogCard from "../blog/BlogCard";
import { Spin } from "antd";
import MostPopularPosts from "../../components/MostPopularPosts";
import LetestComments from "../../components/LetestComments";
function Author() {

    let Router = useRouter()
    const { id } = Router.query;
    const [user, loading] = useAuthState(getAuth(app))
    const [singleData, setSingleData] = useState(null);
    const [isMyProfile, setIsMyProfile] = useState(false);

    const { data: blogs, isLoading } = useQuery({
        queryKey: ['blogs', id, isMyProfile],
        queryFn: async () => {
            try {
                if (isMyProfile) {
                    const res = await api.get(`/blog?user=${id}`);
                    const data = await res.data;
                    return data;
                }
                else {
                    const res = await api.get(`/blog?user=${id}&public=true`);
                    const data = await res.data;
                    return data;
                }
            } catch (error) {
                console.error(error)
            }
        },
        enabled: !!id
    })



    useEffect(() => {
        (
            async () => {
                try {
                    const res = await api.get(`/users/${id}`)
                    setSingleData(res.data)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [id]);
    useEffect(() => {
        if (!user) {
            setIsMyProfile(false)
        }
        else if (user?.email === singleData?.email) {
            setIsMyProfile(true)
        }
    }, [singleData, user])
    if (isLoading) {
        return <Spin size="large" fullscreen={true} />
    }
    return (
        <>
            <Layout >
                <main className="bg-grey pt-50 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <!--author box--> */}
                                {singleData && (
                                    <div className="author-bio mb-50 bg-white p-30 border-radius-10">
                                        <div className="author-image mb-20">
                                            <a href={`/author/${singleData._id}`}>
                                                <Avatar
                                                    size={90}
                                                    src={`${singleData.avatar}`}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="author-info">
                                            <h3 className="font-weight-900">
                                                <span className="vcard author">
                                                    <span className="fn">
                                                        <a
                                                            href={`/author/${singleData._id}`}
                                                            title="Posts by Steven"
                                                            rel="author"
                                                        >
                                                            {singleData.name}
                                                        </a>
                                                    </span>
                                                </span>
                                            </h3>
                                            <strong className="text-muted mt-4">
                                                Follow:{" "}
                                            </strong>
                                            <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                                <li className="list-inline-item">
                                                    <a
                                                        className="fb"
                                                        href="#"
                                                        target="_blank"
                                                        title="Facebook"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        className="tw"
                                                        href="#"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        className="pt"
                                                        href="#"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="post-module-2">
                                    <div className="widget-header-2 position-relative mb-30  wow fadeInUp animated">
                                        <h5 className="mt-5 mb-30">
                                            Posted by {singleData?.name}
                                        </h5>
                                    </div>
                                    <div className="loop-list loop-list-style-1">
                                        <div className="row">
                                            {blogs?.map((item, i) => (
                                                <BlogCard author={true} item={item} key={i} isMyProfile={isMyProfile} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/*                                 
                                <div className="pagination-area mb-30 wow fadeInUp animated">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"

                                                    >
                                                        <i className="elegant-icon arrow_left"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"

                                                    >
                                                        01
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"

                                                    >
                                                        02
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"

                                                    >
                                                        03
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"

                                                    >
                                                        04
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"

                                                    >
                                                        <i className="elegant-icon arrow_right"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div> */}
                            </div>
                            <div className="col-lg-4 primary-sidebar sticky-sidebar">
                                <div className="widget-area">
                                    {/* <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                                        <div className="widget-header-2 position-relative mb-30">
                                            <h5 className="mt-5 mb-30">
                                                Most popular
                                            </h5>
                                        </div>
                                        <div className="post-block-list post-module-1">
                                            <ul className="list-post">
                                                {post.slice(1, 5).map((item, i) => (
                                                    <li className="mb-30 wow fadeInUp animated">
                                                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                                            <div className="post-content media-body">
                                                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                    <Link href={`/blog/${item.id}`}>
                                                                        <a>
                                                                            {item.title}
                                                                        </a>
                                                                    </Link>
                                                                </h6>
                                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                    <span className="post-on">
                                                                        {item.date}
                                                                    </span>
                                                                    <span className="post-by has-dot">
                                                                        {item.views} views
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                <Link href={`/blog/${item.id}`}>
                                                                    <a
                                                                        className="color-white"

                                                                    >
                                                                        <img
                                                                            src={`/assets/imgs/news/${item.img}`}
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div> */}
                                    <MostPopularPosts user={id}/>
                                    <LetestComments />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
export default Author;
