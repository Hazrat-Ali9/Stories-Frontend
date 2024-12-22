import Link from "next/link";
import React from "react";
import api from "../axios.instance";
import SubscribeForm from "../SubscribeForm";
export async function getServerSideProps() {
    // Fetch data from external API
    const tags = await api.get('/blog/tags/all')
    // Pass data to the page via props
    return { props: { tags: tags.data || [] } }
}

const Footer = ({ removeClass, tags }) => {

    return (
        <>
            <footer className="pt-50 pb-20 bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="sidebar-widget wow fadeInUp animated mb-30">
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">About me</h5>
                                </div>
                                <div className="textwidget">
                                    <p>
                                        Start writing, no matter what. The water
                                        does not flow until the faucet is turned
                                        on.
                                    </p>
                                    <p>
                                        <strong className="color-black">
                                            Address
                                        </strong>
                                        <br />
                                        123 Main Street
                                        <br />
                                        New York, NY 10001
                                    </p>
                                    <p>
                                        <strong className="color-black">
                                            Follow me
                                        </strong>
                                    </p>
                                    <br />
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
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                                data-wow-delay="0.1s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Quick link</h5>
                                </div>
                                <ul className="font-small">
                                    <li className="cat-item cat-item-2">
                                        <Link href="/#">
                                            <a>About me</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-4">
                                        <Link href="/#">
                                            <a>Help & Support</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-5">
                                        <Link href="/#">
                                            <a>​​Licensing Policy</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-6">
                                        <Link href="/#">
                                            <a>Refund Policy</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-7">
                                        <Link href="/#">
                                            <a>Hire me</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-7">
                                        <Link href="/#">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                                data-wow-delay="0.2s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Tagcloud</h5>
                                </div>
                                <div className="tagcloud mt-50">
                                    {
                                        tags?.map((item, i) => (
                                            <Link key={i} href={`/tags/${item}`}>
                                                <a
                                                    className="tag-cloud-link"
                                                >
                                                    {item}
                                                </a>
                                            </Link>
                                        ))
                                    }
                                    <Link href="/category">
                                        <a
                                            className="tag-cloud-link"
                                        >
                                            beautiful
                                        </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"
                                data-wow-delay="0.3s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Newsletter</h5>
                                </div>
                                <div className="newsletter">
                                    <p className="font-medium">
                                        Subscribe to our newsletter and get our
                                        newest updates right on your inbox.
                                    </p>
                                    <SubscribeForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
                        <p className="float-md-left font-small text-muted">
                            © {new Date().getFullYear()}, Stories - Hazrat Ali Personal Blog {" "}
                        </p>
                        <p className="float-md-right font-small text-muted">
                            Design by{" "}
                            <Link href="https://alithemes.com">
                                <a target="_blank">
                                    Hazrat Ali
                                </a>
                            </Link>{" "}
                            | All rights reserved
                        </p>
                    </div>
                </div>
            </footer>

            <div className="dark-mark" onClick={removeClass}></div>
        </>
    );
};

export default Footer;
