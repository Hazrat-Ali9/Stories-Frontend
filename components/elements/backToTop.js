import ScrollToTop from "react-scroll-up";

export default function BackToTop() {
    return (
        <ScrollToTop showUnder={160}>
            <a id="scrollUp" style={{ display: "block" }}>
                <i className="elegant-icon arrow_up"></i>
            </a>
        </ScrollToTop>
    );
}
