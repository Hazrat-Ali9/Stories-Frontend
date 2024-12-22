import Link from "next/link";
import Layout from "./../components/layout/layout";
import PostCarousel1 from "./../components/slider/PostCarousel1";
import post from "../data/post.json";
import author from "../data/author.json";
import api from "../components/axios.instance";
import moment from "moment";
import BlogCard from "./blog/BlogCard";
import SubscribeForm from "../components/SubscribeForm";
import MostPopularPosts from "../components/MostPopularPosts";
import LetestComments from "../components/LetestComments";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await api.get('/blog?random=true')
    const letest = await api.get('/blog?limit=5')
    const tags = await api.get('/blog/tags/all')
    // Pass data to the page via props
    return { props: { posts: res.data || [], tags: tags.data?.slice(0, 5) || [], letest: letest.data || [] } }
}


function Home({ posts, tags, letest }) {
    return (
        <>
            <Layout>
                <main>
                    <div className="featured-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <p className="text-muted">
                                        <span
                                            className="typewrite d-inline"
                                            data-period="2000"
                                            data-type='[ " Travel Blogger. ", "Content Writter. ", "Food Guides " ]'
                                        ></span>
                                    </p>
                                    <h2>
                                        Hello, I’m <span>Hazrat Ali</span>
                                    </h2>
                                    <h3 className="mb-20"> Welcome to my blog</h3>
                                    <h5 className="text-muted">
                                        Don't miss out on the latest news about
                                        Travel tips, Hotels review, Food
                                        guide...
                                    </h5>
                                    <SubscribeForm />
                                </div>
                                <div className="col-lg-6 text-right d-none d-lg-block">
                                    <img
                                        src="/assets/imgs/authors/featured.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container">
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
                                            {
                                                tags?.map((item, i) => (
                                                    <li key={i} className="list-inline-item">
                                                        <Link href={`/blogs?tag=${item}`}>
                                                            <a >
                                                                #{item}</a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
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
                                {posts.slice(0, 5).map((item, i) => (
                                    <BlogCard key={i} item={item} />
                                ))}

                            </div>
                        </div>
                    </div> */}
                    {/* breack */}
                    <div className="bg-grey pt-50 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="post-module-2">
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
                                                    {
                                                        tags?.map((item, i) => (
                                                            <li key={i} className="list-inline-item">
                                                                <Link href={`/blogs?tag=${item._id}`}>
                                                                    <a >
                                                                        #{item._id}</a>
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="loop-list loop-list-style-1 mt-20">
                                            <div className="row">
                                                {posts.slice(0, 4).map((item, i) => (
                                                    <BlogCard key={i} item={item} home />
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
                                            {letest?.map((item, i) => (
                                                <article
                                                    key={i}
                                                    className="hover-up-2 transition-normal wow fadeInUp animated">
                                                    <div className="row mb-40 list-style-2">
                                                        <div className="col-md-4">
                                                            <div className="post-thumb position-relative border-radius-5">
                                                                <div
                                                                    className="img-hover-slide border-radius-5 position-relative"
                                                                    style={{ backgroundImage: `url(${item?.image})` }}
                                                                >
                                                                    <Link href={`/blog/${item?._id}`}>
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
                                                                    <Link href={`/category/${item?.category}`}>
                                                                        <a>
                                                                            <span className="post-cat text-primary">
                                                                                {item?.category}
                                                                            </span>
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                                <h5 className="post-title font-weight-900 mb-20">
                                                                    <Link href={`/blog/${item?._id}`}>
                                                                        <a>
                                                                            {item?.title}
                                                                        </a>
                                                                    </Link>
                                                                    <span className="post-format-icon">
                                                                        <i className="elegant-icon icon_star_alt"></i>
                                                                    </span>
                                                                </h5>
                                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                    <span className="post-on">
                                                                        {moment(item?.createdAt).format("MMM DD, YYYY")}
                                                                    </span>
                                                                    <span className="post-by has-dot">
                                                                        {item?.views} views
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
                                            {author.slice(0, 1).map((item, i) => (
                                                <div key={i}>
                                                    <img
                                                        key={i}
                                                        className="about-author-img mb-25"
                                                        src={`/assets/imgs/authors/${item?.img}`}
                                                        alt=""
                                                    />
                                                    <h5 className="mb-20">
                                                        Hello, I'm Hazrat Ali
                                                    </h5>
                                                    <p className="font-medium text-muted">
                                                        {item?.desc}
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
                                            ))}
                                        </div>
                                        {/* Most popular */}
                                       <MostPopularPosts />
                                        <LetestComments />
                                        {/* <div className="sidebar-widget widget_instagram wow fadeInUp animated">
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
                                        </div> */}
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
export default Home;
