import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import NavMenu from "./nav";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Menu = ({ addClass, categories }) => {
    const [scroll, setScroll] = useState(0);
    const [isToggled, setToggled] = useState(false);
    const [size, setSize] = useState(0);

    const toggleTrueFalse = () => setToggled(!isToggled);

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    useIsomorphicLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        updateSize(); // Initial size check
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <>
            <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
                <div className="container align-self-center position-relative">
                    <div className="main-nav float-left ">
                        <nav>
                            <ul className="main-menu d-none d-lg-inline font-small">
                                <li >
                                    <Link href="/">
                                        <a>
                                            <i className="elegant-icon icon_house_alt mr-5"></i>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/Travel">
                                        <a>Travel</a>
                                    </Link>
                                </li>
                                <li className="current-item has-mega-menu">
                                    <Link href="#">
                                        <a>Categorys</a>
                                    </Link>
                                    <ul className="mega-menu">
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <ul>
                                                {
                                                    categories?.slice(0, 7).map((category) => (
                                                        <li key={category._id}>
                                                            <Link href={`/category/${category.name}`}>
                                                                <a>{category.name}</a>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </li>
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <ul>
                                                {
                                                    categories?.slice(8, 14)?.map((category) => (
                                                        <li key={category._id}>
                                                            <Link href={`/category/${category.name}`}>
                                                                <a>{category.name}</a>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </li>
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                          
                                            <ul>
                                            {
                                                    categories?.slice(15, 21)?.map((category) => (
                                                        <li key={category._id}>
                                                            <Link href={`/category/${category.name}`}>
                                                                <a>{category.name}</a>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                        <ul>
                                                {
                                                    categories?.slice(21, 28)?.map((category) => (
                                                        <li key={category._id}>
                                                            <Link href={`/category/${category.name}`}>
                                                                <a>{category.name}</a>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/category/Review">
                                        <a>Review</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blogs">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                            </ul>

                            <div className={size < 991 ? "d-block d-lg-none" : "d-none"}>
                                <button onClick={toggleTrueFalse}>
                                    <span className="menu-icon mr-10">
                                        <span className="menu-icon-inner"></span>
                                    </span>
                                    Main Menu
                                </button>
                                <NavMenu isToggled={isToggled} />
                            </div>
                        </nav>
                    </div>
                    <div className="float-right header-tools text-muted font-small">
                        <ul className="header-social-network d-inline-block list-inline mr-15">
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon fb text-xs-center" target="_blank" href="#">
                                        <i className="elegant-icon social_facebook"></i>
                                    </a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon tw text-xs-center" target="_blank" href="#">
                                        <i className="elegant-icon social_twitter "></i>
                                    </a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon pt text-xs-center" target="_blank" href="#">
                                        <i className="elegant-icon social_pinterest "></i>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="off-canvas-toggle-cover d-inline-block">
                            <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle" onClick={addClass}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </>
    );
};

export default Menu;
