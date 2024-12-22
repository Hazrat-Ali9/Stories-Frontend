import Link from "next/link";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Layout from "./layout";
import data from "../../data/post.json";
import { useQuery } from "@tanstack/react-query";
import api from "../axios.instance";
import moment from "moment";
const Sidebar = ({ removeClass }) => {

    const { data } = useQuery({
        queryKey: ["tags"],
        queryFn: async () => {
            const tags = await api.get('/blog/tags/all')
            const popular = await api.get('/blog?sort=true&limit=5')
            return {
                tags: tags.data,
                popular: popular.data
            }
        }
    })
    const tags = data?.tags || []
    const popular = data?.popular || []
    return (
        <>
            <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
                <PerfectScrollbar>
                    <button className="off-canvas-close" onClick={removeClass}>
                        <i className="elegant-icon icon_close"></i>
                    </button>
                    <div className="sidebar-inner">
                        {/* <!--Categories--> */}
                        <div className="sidebar-widget widget_categories mb-50 mt-30">
                            <div className="widget-header-2 position-relative">
                                <h5 className="mt-5 mb-15">Hot topics</h5>
                            </div>
                            <div className="widget_nav_menu">
                                <ul>
                                    {
                                        tags?.slice(0, 8).map((tag, i) => (
                                            <li key={i} className="cat-item cat-item-1">
                                                <Link href={`/blogs?tag=${tag._id}`}>
                                                    <a>{tag._id}</a>
                                                </Link>
                                                <span className="post-count">{tag.count}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* <!--Latest--> */}
                        <div className="sidebar-widget widget-latest-posts mb-50">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">Don't miss</h5>
                            </div>
                            <div className="post-block-list post-module-1 post-module-5">
                                <ul className="list-post">
                                    {popular.map((item, i) => (
                                        <li key={i} className="mb-30">
                                            <div className="d-flex hover-up-2 transition-normal">
                                                <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                    <Link href={`/blog/${item._id}`}>
                                                        <a className="color-white">
                                                            <img className="img-fluid" src={`${item.image}`} alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="post-content media-body">
                                                    <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                        <Link href={`/blog/${item._id}`}>
                                                            <a>{item.title}</a>
                                                        </Link>
                                                    </h6>
                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span className="post-on">{
                                                            moment(item.createdAt).fromNow()
                                                            }</span>
                                                        <span className="post-by has-dot">{item.views} views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </aside>
        </>
    );
};

export default Sidebar;
