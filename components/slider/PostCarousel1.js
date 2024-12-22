import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import data from "../../data/post.json";
const PostCarousel1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: true,
    };
    return (
        <div>
            <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
                <div className="arrow-cover"></div>
                <Slider {...settings} className="slide-fade">
                    {data.slice(4, 6).map((item, i) => (
                        <div key={i} className="position-relative post-thumb">
                            <div
                                className="thumb-overlay img-hover-slide position-relative"
                                style={{
                                    backgroundImage: `url(/assets/imgs/news/${item.img})`
                                }}
                            >
                                {/* <Link href={`/blog/${item.id}`}>
                                    <a
                                        className="img-link"
                                    ></a>
                                </Link> */}
                                <span className="top-left-icon bg-warning">
                                    <i className="elegant-icon icon_star_alt"></i>
                                </span>
                                <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                                    <div className="entry-meta meta-0 font-small mb-20">
                                        <Link href={`/category/${item.category}`}>
                                            <a>
                                                <span className="post-cat text-info">
                                                    {item.category}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <h3 className="post-title font-weight-900 mb-20">
                                        <Link href={`/blog/${item.id}`}>
                                            <a>
                                                {item.title}
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                        <span className="post-on">
                                            {item.date}
                                        </span>
                                        <span className="hit-count has-dot">
                                            {item.views} Views
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PostCarousel1;

