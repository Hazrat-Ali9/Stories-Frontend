import Link from "next/link";
import Layout from "./../components/layout/layout";
import PostCarousel1 from './../components/slider/PostCarousel1';
import data from "../data/post.json";
function CaregoryGrid() {
    return (
        <>
            <Layout>
                <main>
                    <div className="archive-header pt-50 text-center">
                        <div className="container">
                            <h2 className="font-weight-900">Guides</h2>
                            <div className="breadcrumb">
                                <Link href="/">
                                    <a rel="nofollow">
                                        Home
                                    </a>
                                </Link>
                                <span></span> Guides
                            </div>
                            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="loop-grid mb-30">
                            <div className="row">
                                <div className="col-lg-8 mb-30">
                                    <PostCarousel1 />
                                </div>
                                {data.slice(1, 8).map((item, i) => (
                                    <article
                                        key={i}
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
                            <div className="row mt-50">
                                <div className="col-12">
                                    <div className="pagination-area mb-30 wow fadeInUp animated">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-start">
                                                <li className="page-item">
                                                    <Link href="#">
                                                        <a
                                                            className="page-link"
                                                        >
                                                            <i className="elegant-icon arrow_left"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item active">
                                                    <Link href="#">
                                                        <a
                                                            className="page-link"
                                                        >
                                                            01
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link href="#">
                                                        <a
                                                            className="page-link"
                                                        >
                                                            02
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link href="#">
                                                        <a
                                                            className="page-link"
                                                        >
                                                            03
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link href="#">
                                                        <a
                                                            className="page-link"
                                                        >
                                                            04
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link href="#">
                                                        <a
                                                            className="page-link"
                                                        >
                                                            <i className="elegant-icon arrow_right"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
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
// Catagory Grid 
export default CaregoryGrid;
