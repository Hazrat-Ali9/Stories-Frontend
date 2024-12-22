import Link from "next/link";
import Layout from "./../components/layout/layout";
import HomeSlider3 from "./../components/slider/HomeSlider3";
import PostCarousel1 from "./../components/slider/PostCarousel1";
import data from "../data/post.json";
function Home3() {
    return (
        <>
            <Layout>
                <main className="bg-grey pb-30">
                    <div className="container pt-30">
                        <div className="featured-slider-3 position-relative">
                            <div className="slider-3-arrow-cover"></div>
                            <HomeSlider3 />
                        </div>
                    </div>
                    {/* <!-- End feature --> */}
                    <div className="container">
                        <div className="hot-tags pt-30 pb-30 font-small align-self-center">
                            <div className="widget-header-3">
                                <div className="row align-self-center">
                                    <div className="col-md-4 align-self-center">
                                        <h5 className="widget-title">
                                            Featured posts
                                        </h5>
                                    </div>
                                    <div className="col-md-8 text-md-right font-small align-self-center">
                                        <p className="d-inline-block mr-5 mb-0">
                                            <i className="elegant-icon  icon_tag_alt mr-5 text-muted"></i>
                                            Hot tags:
                                        </p>
                                        <ul className="list-inline d-inline-block tags">
                                            <li className="list-inline-item">
                                                <a href="#"># Covid-19</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"># Inspiration</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"># Work online</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"># Stay home</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="loop-grid mb-30">
                            <div className="row">
                                <div className="col-lg-8 mb-30">
                                    <PostCarousel1 />
                                </div>
                                {data.slice(1, 5).map((item, i) => (
                                    <article
                                        className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="post-card-1 border-radius-10 hover-up">
                                            <div
                                                className="post-thumb thumb-overlay img-hover-slide position-relative"
                                                style={{
                                                    backgroundImage: `url(assets/imgs/news/${item.img})`
                                                }}
                                            >
                                                <Link href={`/blog/${item.id}`}>
                                                    <a
                                                        className="img-link"
                                                    ></a>
                                                </Link>
                                                <span className="top-right-icon bg-success">
                                                    <i className="elegant-icon icon_camera_alt"></i>
                                                </span>
                                                <ul className="social-share">
                                                    <li>
                                                        <Link href="#">
                                                            <a>
                                                                <i className="elegant-icon social_share"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
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
                                                        <Link href="#">
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
                                                        <Link href="#">
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
                                            <div className="post-content p-30">
                                                <div className="entry-meta meta-0 font-small mb-10">
                                                    <Link href={`/category/${item.category}`}>
                                                        <a>
                                                            <span className="post-cat text-info">
                                                                {item.category}
                                                            </span>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="d-flex post-card-content">
                                                    <h5 className="post-title mb-20 font-weight-900">
                                                        <Link href={`/blog/${item.id}`}>
                                                            <a>
                                                                {item.title}
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span className="post-on">
                                                            {item.date}
                                                        </span>
                                                        <span className="time-reading has-dot">
                                                            {item.readTime} mins read
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
                    </div>
                    <div className="bg-grey pt-50 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="post-module-2">
                                        <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                                            <h5 className="mt-5 mb-30">
                                                Travel tips
                                            </h5>
                                        </div>
                                        <div className="loop-list loop-list-style-1">
                                            <div className="row">
                                                {data.slice(4, 8).map((item, i) => (
                                                    <article
                                                        className="col-md-6 mb-30 wow fadeInUp animated"
                                                        data-wow-delay="0.2s"
                                                    >
                                                        <div className="post-card-1 border-radius-10 hover-up">
                                                            <div
                                                                className="post-thumb thumb-overlay img-hover-slide position-relative"
                                                                style={{
                                                                    backgroundImage: `url(assets/imgs/news/${item.img})`
                                                                }}
                                                            >
                                                                <Link href={`/blog/${item.id}`}>
                                                                    <a
                                                                        className="img-link"
                                                                    ></a>
                                                                </Link>
                                                                <span className="top-right-icon bg-success">
                                                                    <i className="elegant-icon icon_camera_alt"></i>
                                                                </span>
                                                                <ul className="social-share">
                                                                    <li>
                                                                        <Link href="#">
                                                                            <a>
                                                                                <i className="elegant-icon social_share"></i>
                                                                            </a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#">
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
                                                                        <Link href="#">
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
                                                                        <Link href="#">
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
                                                            <div className="post-content p-30">
                                                                <div className="entry-meta meta-0 font-small mb-10">
                                                                    <Link href={`/category/${item.category}`}>
                                                                        <a>
                                                                            <span className="post-cat text-info">
                                                                                {item.category}
                                                                            </span>
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                                <div className="d-flex post-card-content">
                                                                    <h5 className="post-title mb-20 font-weight-900">
                                                                        <Link href={`/blog/${item.id}`}>
                                                                            <a>
                                                                                {item.title}
                                                                            </a>
                                                                        </Link>
                                                                    </h5>

                                                                    <div className="post-excerpt mb-25 font-small text-muted">
                                                                        <p>
                                                                            {item.desc}
                                                                        </p>
                                                                    </div>
                                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                        <span className="post-on">
                                                                            {item.date}
                                                                        </span>
                                                                        <span className="time-reading has-dot">
                                                                            {item.readTime} mins read
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
                                    </div>
                                    <div className="post-module-3">
                                        <div className="widget-header-1 position-relative mb-30">
                                            <h5 className="mt-5 mb-30">
                                                Latest posts
                                            </h5>
                                        </div>
                                        <div className="loop-list loop-list-style-1">
                                            {data.slice(4, 8).map((item, i) => (
                                                <article className="hover-up-2 transition-normal wow fadeInUp animated">
                                                    <div className="row mb-40 list-style-2">
                                                        <div className="col-md-4">
                                                            <div className="post-thumb position-relative border-radius-5">
                                                                <div
                                                                    className="img-hover-slide border-radius-5 position-relative"
                                                                    style={{ backgroundImage: `url(assets/imgs/news/${item.img})` }}
                                                                >
                                                                    <Link href={`/blog/${item.id}`}>
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
                                                                    <Link href={`/blog/${item.id}`}>
                                                                        <a>
                                                                            {item.title}
                                                                        </a>
                                                                    </Link>
                                                                    <span className="post-format-icon">
                                                                        <i className="elegant-icon icon_star_alt"></i>
                                                                    </span>
                                                                </h5>
                                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                    <span className="post-on">
                                                                        {item.date}
                                                                    </span>
                                                                    <span className="time-reading has-dot">
                                                                        {item.readTime} mins read
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
                                    <div className="pagination-area mb-30 wow fadeInUp animated">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-start">
                                                <li className="page-item">
                                                    <Link href="/#">
                                                        <a className="page-link">
                                                            <i className="elegant-icon arrow_left"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item active">
                                                    <Link href="/#">
                                                        <a className="page-link">
                                                            01
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link href="/#">
                                                        <a className="page-link">
                                                            02
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link href="/#">
                                                        <a className="page-link">
                                                            03
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link href="/#">
                                                        <a className="page-link">
                                                            04
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link href="/#">
                                                        <a className="page-link">
                                                            <i className="elegant-icon arrow_right"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
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
                                        <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                                            <div className="widget-header-1 position-relative mb-30">
                                                <h5 className="mt-5 mb-30">
                                                    Most popular
                                                </h5>
                                            </div>
                                            <div className="post-block-list post-module-1">
                                                <ul className="list-post">
                                                    {data.slice(1, 5).map((item, i) => (
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
                                        </div>
                                        <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                                            <div className="widget-header-1 position-relative mb-30">
                                                <h5 className="mt-5 mb-30">
                                                    Last comments
                                                </h5>
                                            </div>
                                            <div className="post-block-list post-module-2">
                                                <ul className="list-post">
                                                    <li className="mb-30 wow fadeInUp animated">
                                                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                <Link href="/single">
                                                                    <a className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/authors/author-2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="post-content media-body">
                                                                <p className="mb-10">
                                                                    <Link href="/author">
                                                                        <a>
                                                                            <strong>
                                                                                David
                                                                            </strong>
                                                                        </a>
                                                                    </Link>
                                                                    <span className="ml-15 font-small text-muted has-dot">
                                                                        16 Jan
                                                                        2020
                                                                    </span>
                                                                </p>
                                                                <p className="text-muted font-small">
                                                                    A writer is
                                                                    someone for
                                                                    whom writing
                                                                    is more
                                                                    difficult
                                                                    than...
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-30 wow fadeInUp animated">
                                                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                <Link href="/single">
                                                                    <a className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/authors/author-3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="post-content media-body">
                                                                <p className="mb-10">
                                                                    <Link href="/author">
                                                                        <a>
                                                                            <strong>
                                                                                Kokawa
                                                                            </strong>
                                                                        </a>
                                                                    </Link>
                                                                    <span className="ml-15 font-small text-muted has-dot">
                                                                        12 Feb
                                                                        2020
                                                                    </span>
                                                                </p>
                                                                <p className="text-muted font-small">
                                                                    Striking
                                                                    pewter
                                                                    studded
                                                                    epaulettes
                                                                    silver zips
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="wow fadeInUp animated">
                                                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                <Link href="/single">
                                                                    <a className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/news/thumb-1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="post-content media-body">
                                                                <p className="mb-10">
                                                                    <Link href="/author">
                                                                        <a>
                                                                            <strong>
                                                                                Tsukasi
                                                                            </strong>
                                                                        </a>
                                                                    </Link>
                                                                    <span className="ml-15 font-small text-muted has-dot">
                                                                        18 May
                                                                        2020
                                                                    </span>
                                                                </p>
                                                                <p className="text-muted font-small">
                                                                    Workwear bow
                                                                    detailing a
                                                                    slingback
                                                                    buckle strap
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sidebar-widget widget_instagram wow fadeInUp animated">
                                            <div className="widget-header-1 position-relative mb-30">
                                                <h5 className="mt-5 mb-30">
                                                    Instagram
                                                </h5>
                                            </div>
                                            <div className="instagram-gellay">
                                                <ul className="insta-feed">
                                                    <li>
                                                        <Link href="/#">
                                                            <a
                                                                href="/assets/imgs/thumbnail-3.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-1.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a
                                                                href="/assets/imgs/thumbnail-4.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-2.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a
                                                                href="/assets/imgs/thumbnail-5.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-3.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a
                                                                href="/assets/imgs/thumbnail-3.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-4.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a
                                                                href="/assets/imgs/thumbnail-4.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-5.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a
                                                                href="/assets/imgs/thumbnail-5.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-6.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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
export default Home3;
