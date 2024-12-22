import Link from "next/link";

import data from "../../data/post.json";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import api from "../axios.instance";
import moment from "moment";


const Bottom = ({ }) => {
    const { data, isLoading } = useQuery({
        queryKey: ['blog-footer'],
        queryFn: async () => {
            const dev = await api.get('/blog?category=Web%20Development&limit=5')
            const design = await api.get('/blog?category=Web design&limit=5')
            const news = await api.get('/blog?category=News&limit=5')
            return {
                development: dev.data || [],
                design: design.data || [],
                news: news.data || []
            }
        }
    })
    if (isLoading) {
        return <Spin />
    }
    return (
        <>
            <div className="site-bottom pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated">
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Web Development</h5>
                                </div>
                                <div className="post-block-list post-module-1">
                                    <ul className="list-post">
                                        {data?.development?.map((item, i) => (
                                            <li key={i} className="mb-30">
                                                <div className="d-flex hover-up-2 transition-normal">
                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href={`/blog/${item._id}`}>
                                                            <a className="color-white">
                                                                <img
                                                                    src={`${item.image}`}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                            <Link href={`/blog/${item._id}`}>
                                                                <a>
                                                                    {item.title}
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                {moment(item.createdAt).fromNow()}
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                {item.views} views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                                data-wow-delay="0.2s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Web Design</h5>
                                </div>
                                <div className="post-block-list post-module-1">
                                    <ul className="list-post">
                                        {data?.design?.map((item, i) => (
                                            <li key={i} className="mb-30">
                                                <div className="d-flex hover-up-2 transition-normal">
                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href={`/blog/${item._id}`}>
                                                            <a className="color-white">
                                                                <img
                                                                    src={`${item.image}`}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                            <Link href={`/blog/${item._id}`}>
                                                                <a>
                                                                    {item.title}
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                {moment(item.createdAt).fromNow()}
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                {item.views} views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                                data-wow-delay="0.4s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Letest News</h5>
                                </div>
                                <div className="post-block-list post-module-1">
                                    <ul className="list-post">
                                        {data?.news?.map((item, i) => (
                                            <li key={i} className="mb-30">
                                                <div className="d-flex hover-up-2 transition-normal">
                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href={`/blog/${item._id}`}>
                                                            <a className="color-white">
                                                                <img
                                                                    src={`${item.image}`}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                            <Link href={`/blog/${item._id}`}>
                                                                <a>
                                                                    {item.title}
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">
                                                                {moment(item.createdAt).fromNow()}
                                                            </span>
                                                            <span className="post-by has-dot">
                                                                {item.views} views
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--container--> */}
            </div>
        </>
    );
};

export default Bottom;
