import React, { useState } from "react";
import Bottom from "./bottom";
import Search from "../elements/search";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import BackToTop from "../elements/backToTop";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const PrivateLayout = ({ children, title }) => {
    const addClass = () => {
        document.body.classList.add("canvas-opened");
    };

    const removeClass = () => {
        document.body.classList.remove("canvas-opened");
    };

    const openSearch = () => {
        document.body.classList.toggle("open-search-form");
    };

    return (
        <>
            <Head>
                <title>
                    {
                        title ? title : "Hazrat Ali - Personal Blog Site"
                    }
                </title>
                <meta property="og:title" content={title ? title : "Hazrat Ali - Personal Blog Site"} key="title" />
                {/* <link href="" rel="stylesheet" /> */}
            </Head>
            <Sidebar removeClass={removeClass} />
            <Header addClass={addClass} openSearch={openSearch} />
            <Search />
            <Toaster />
            {children}

            {/* <Bottom /> */}
            {/* <Footer removeClass={removeClass} /> */}
            <BackToTop />
        </>
    );
};

export default PrivateLayout;
