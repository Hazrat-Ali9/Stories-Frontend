import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/post.json";
import { useQuery } from "@tanstack/react-query";
import api from "../../components/axios.instance";
import moment from "moment";
import MostPopularPosts from "../../components/MostPopularPosts";

export const getServerSideProps = async ({ params }) => {
    const res = await api.get(`/blog?category=${params.category}`);
    const data = await res.data;
    return {
        props: { catList: data },
    };
};

function CaregoryList({ catList }) {
    const router = useRouter();
    const { category } = router.query;
    return (
        <>
            <Layout>
                <main>
                    {/* <!--archive header--> */}
                    <div className="archive-header pt-50">
                        <div className="container">
                            <h2 className="font-weight-900">{category}</h2>
                            <div className="breadcrumb">
                                <Link href="/">
                                    <a rel="nofollow">
                                        Home
                                    </a>
                                </Link>
                                <span></span> {category}
                            </div>
                            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                        </div>
                    </div>
                    <div className="pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="post-module-3">
                                        <div className="loop-list loop-list-style-1">
                                            {
                                                catList.length === 0 ? <p className="text-center">No Blog found</p> :
                                                    catList?.map((item, i) => (
                                                        <article key={i} className="hover-up-2 transition-normal wow fadeInUp animated">
                                                            <div className="row mb-40 list-style-2">
                                                                <div className="col-md-4">
                                                                    <div className="post-thumb position-relative border-radius-5">
                                                                        <div
                                                                            className="img-hover-slide border-radius-5 position-relative"
                                                                            style={{ backgroundImage: `url(${item.image})` }}
                                                                        >
                                                                            <Link href={`/blog/${item._id}`}>
                                                                                <a
                                                                                    className="img-link"
                                                                                ></a>
                                                                            </Link>
                                                                        </div>
                                                                        <ul className="social-share">
                                                                            <li>
                                                                                <Link href="/#">
                                                                                    <a>
                                                                                        <i className="elegant-icon social_share"></i>
                                                                                    </a>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/#">
                                                                                    <a
                                                                                        className="fb"
                                                                                        title="Share on Facebook"
                                                                                        target="_blank"
                                                                                    >
                                                                                        <i className="elegant-icon social_facebook"></i>
                                                                                    </a>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/#">
                                                                                    <a
                                                                                        className="tw"
                                                                                        target="_blank"
                                                                                        title="Tweet now"
                                                                                    >
                                                                                        <i className="elegant-icon social_twitter"></i>
                                                                                    </a>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link href="/#">
                                                                                    <a
                                                                                        className="pt"
                                                                                        target="_blank"
                                                                                        title="Pin it"
                                                                                    >
                                                                                        <i className="elegant-icon social_pinterest"></i>
                                                                                    </a>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 align-self-center">
                                                                    <div className="post-content">
                                                                        <div className="entry-meta meta-0 font-small mb-10">
                                                                            <Link href={`/category/${item.category}`}>
                                                                                <a>
                                                                                    <span className="post-cat text-primary">
                                                                                        {item.category}
                                                                                    </span>
                                                                                </a>
                                                                            </Link>
                                                                        </div>
                                                                        <h5 className="post-title font-weight-900 mb-20">
                                                                            <Link href={`/blog/${item._id}`}>
                                                                                <a>
                                                                                    {item.title}
                                                                                </a>
                                                                            </Link>
                                                                            {/* <span className="post-format-icon">
                                                                                <i className="elegant-icon icon_star_alt"></i>
                                                                            </span> */}
                                                                        </h5>
                                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                            <span className="post-on">
                                                                                {moment(item.createdAt).format("MMM DD, YYYY")}
                                                                            </span>
                                                                            <span className="post-by has-dot">
                                                                                {item.views} views
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    ))}
                                        </div>
                                    </div>
                                    {/* <div className="pagination-area mb-30 wow fadeInUp animated">
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
                                <div className="col-lg-4">
                                    <div className="widget-area">
                                        <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                                            <img
                                                className="about-author-img mb-25"
                                                src="/assets/imgs/authors/author.jpg"
                                                alt=""
                                            />
                                            <h5 className="mb-20">
                                                Hello, I'm Steven
                                            </h5>
                                            <p className="font-medium text-muted">
                                                Hi, I’m Stenven, a Florida
                                                native, who left my career in
                                                corporate wealth management six
                                                years ago to embark on a summer
                                                of soul searching that would
                                                change the course of my life
                                                forever.
                                            </p>
                                            <strong>Follow me: </strong>
                                            <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                                <li className="list-inline-item">
                                                    <Link href="/#">
                                                        <a
                                                            className="fb"
                                                            target="_blank"
                                                            title="Facebook"
                                                        >
                                                            <i className="elegant-icon social_facebook"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="/#">
                                                        <a
                                                            className="tw"
                                                            target="_blank"
                                                            title="Tweet now"
                                                        >
                                                            <i className="elegant-icon social_twitter"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="/#">
                                                        <a
                                                            className="pt"
                                                            target="_blank"
                                                            title="Pin it"
                                                        >
                                                            <i className="elegant-icon social_pinterest"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <MostPopularPosts />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
export default CaregoryList;
