import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import data from "../../data/post.json";

const HomeSlider3 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
    };
    return (
        <div>
            <Slider {...settings} className="featured-slider-3-items">
                {data.slice(4, 6).map((item, i) => (
                    <div key={i} className="slider-single overflow-hidden border-radius-10">
                        <div className="post-thumb position-relative">
                            <div
                                className="thumb-overlay position-relative"
                                style={{
                                    backgroundImage: `url(/assets/imgs/news/${item.img})`
                                }}
                            >
                                <div className="post-content-overlay">
                                    <div className="container">
                                        <div className="entry-meta meta-0 font-small mb-20">
                                            <Link href={`/category/${item.category}`}>
                                                <a>
                                                    <span className="post-cat text-info">
                                                        {item.category}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <h1 className="post-title mb-20 font-weight-900 text-white">
                                            <Link href={`/blog/${item.id}`}>
                                                <a>
                                                    {item.title}
                                                </a>
                                            </Link>
                                        </h1>
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
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeSlider3;
