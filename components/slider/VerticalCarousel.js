import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import data from "../../data/post.json";

export default function VerticalCarousel() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <>
            <div className="featured-slider-2">
                <div className="featured-slider-2-items" style={{ overflow: "hidden" }}>
                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                        {data.slice(1, 6).map((item, i) => (
                            <div key={i} className="slider-single">
                                <div className="post-thumb position-relative">
                                    <div
                                        className="thumb-overlay position-relative"
                                        style={{
                                            backgroundImage: `url(assets/imgs/news/${item.img})`
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

                <div className="container position-relative">
                    <div className="arrow-cover color-white"></div>
                    <div className="featured-slider-2-nav-cover">
                        <Slider
                            asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            vertical={true}
                            className="featured-slider-2-nav"
                        >
                            {data.slice(1, 6).map((item, i) => (
                                <div key={i} className="slider-post-thumb mr-15 mt-20 position-relative">
                                    <div className="d-flex hover-up-2 transition-normal">
                                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5">
                                            <img
                                                className="border-radius-5"
                                                src={`/assets/imgs/news/${item.img}`}
                                                alt=""
                                            />
                                        </div>
                                        <div className="post-content media-body text-white">
                                            <h5 className="post-title mb-15 text-limit-2-row">
                                                {item.title}
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on text-white">
                                                    {item.date}
                                                </span>
                                                <span className="post-by has-dot text-white">
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
            </div>
        </>
    );
}
