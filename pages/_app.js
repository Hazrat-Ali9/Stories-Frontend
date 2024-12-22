import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { PrimeReactProvider } from 'primereact/api';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/style.css";
import "../public/assets/css/widgets.css";
import "../public/assets/css/responsive.css";
import 'metismenujs/style';
import './blog/blog.css'
import {

    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  const queryClient = new QueryClient()
function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        // Check if window is defined to ensure client-side code only
        if (typeof window !== "undefined") {
            const WOW = require("wowjs");
            new WOW.WOW().init();
        }

        const gridElement = document.querySelector('.grid-sizer');

        // Conditionally import and initialize Masonry layout if grid element exists
        if (gridElement) {
            const Masonry = require("masonry-layout");
            new Masonry(".grid", {
                itemSelector: ".grid-item",
                columnWidth: ".grid-sizer",
            });
        }

        // Cleanup: remove routeChangeError event listener
        return () => {
            router.events.off('routeChangeError', () => { });
        };
    }, [router.events]);

    return (
        <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
                <Component {...pageProps} />
            </PrimeReactProvider>
        </QueryClientProvider>
    );
}

export default MyApp;