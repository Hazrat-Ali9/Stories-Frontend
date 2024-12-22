import MetisMenu from "metismenujs";
import Link from "next/link";
import { useEffect } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';

const NavMenu = ({ isToggled }) => {
    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);

    return (
        <>
            <div className={isToggled ? "mobilemenu active" : "mobilemenu hide"}>
                <PerfectScrollbar>
                    <ul className="metismenu text-muted" id="metismenu">
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="true">
                                Home
                            </a>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home default</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-2">
                                        <a>Homepage 2</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-3">
                                        <a>Homepage 3</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                Pages
                            </a>
                            <ul>
                                <li>
                                    <Link href="/page-about">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-typography">
                                        <a>Typography</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-register">
                                        <a>Register</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-login">
                                        <a>Login</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-search">
                                        <a>Search</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-author">
                                        <a>Author</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/page-404">
                                        <a>404 page</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                Category
                            </a>
                            <ul>
                                <li>
                                    <Link href="/category-list">
                                        <a>List layout</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-grid">
                                        <a>Grid layout</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-masonry">
                                        <a>Masonry layout</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-big">
                                        <a>Big layout</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                Single post
                            </a>
                            <ul>
                                <li>
                                    <Link href="/single">
                                        <a>Default</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/single-2">
                                        <a>Big image</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/single-3">
                                        <a>Left image</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/single-4">
                                        <a>With sidebar</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default NavMenu;
