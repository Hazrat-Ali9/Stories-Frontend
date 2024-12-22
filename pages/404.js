import Link from "next/link";
import Layout from "./../components/layout/layout";
function Custom404() {
    return (
        <>
            <Layout>
                <main className="bg-grey pt-80 pb-50">
                    <div className="container">
                        <div className="row pt-80">
                            <div className="col-lg-6 col-md-12 d-lg-block d-none pr-50">
                                <img
                                    src="/assets/imgs/theme/page-not-found.png"
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 pl-50 text-md-center text-lg-left">
                                <h1 className="mb-30 font-weight-900 page-404">
                                    404
                                </h1>
                                <form
                                    action="#"
                                    method="get"
                                    className="search-form d-lg-flex open-search mb-30"
                                >
                                    <i className="icon-search"></i>
                                    <input
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        type="text"
                                        placeholder="Search..."
                                    />
                                </form>
                                <p className="">
                                    The link you clicked may be broken or the
                                    page may have been removed.
                                    <br /> visit the{" "}
                                    <Link href="/"><a>Homepage</a></Link> or{" "}
                                    <Link href="/page-contact"><a>Contact us</a></Link>{" "}
                                    about the problem
                                </p>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="button button-contactForm mt-30"
                                    >
                                        <Link href="/"><a className="text-white">
                                            Home page
                                        </a></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
export default Custom404;
