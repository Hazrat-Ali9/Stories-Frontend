import Link from "next/link";
import Slider from "react-slick";
const BottomCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
    };
    return (
        <>
            <Slider {...settings} className="carausel-3-columns">
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
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
                        <h6>
                            {" "}
                            <Link href="/category">
                                <a>Travel Tips</a>
                            </Link>{" "}
                        </h6>
                        <p className="text-muted font-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <Link href="/single">
                            <a className="color-white">
                                <img
                                    src="/assets/imgs/news/thumb-2.jpg"
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="post-content media-body">
                        <h6>
                            <Link href="/category">
                                <a>Lifestyle</a>
                            </Link>
                        </h6>
                        <p className="text-muted font-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <Link href="/single">
                            <a className="color-white">
                                <img
                                    src="/assets/imgs/news/thumb-3.jpg"
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="post-content media-body">
                        <h6>
                            <Link href="/category">
                                <a>Foody</a>
                            </Link>
                        </h6>
                        <p className="text-muted font-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <Link href="/single">
                            <a className="color-white">
                                <img
                                    src="/assets/imgs/news/thumb-4.jpg"
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="post-content media-body">
                        <h6>
                            <Link href="/category">
                                <a>Entertaiment</a>
                            </Link>
                        </h6>
                        <p className="text-muted font-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default BottomCarousel;
