import { Button } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ item, author, home, isMyProfile }) => {
    if (!item) {
        return null
    }
    return (
        <article
            className={author ? "col-md-6 mb-30 wow fadeInUp animated" : home ? "col-md-6 mb-30 wow fadeInUp animated" : "col-lg-4 col-md-6 mb-30 wow fadeInUp animated"}
            data-wow-delay="0.2s"
        >
            <div className="post-card-1 border-radius-10 hover-up position-relative">
                {isMyProfile && (
                    <Button
                        type='primary'
                        size='small'
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            zIndex: '1',
                            background: item.status === "published" ? "green" : item.status === "deleted" ? "red" : "#e9a140",
                            color: "white",
                            textTransform: "capitalize"
                        }}
                    >
                        {item.status}
                    </Button>
                )}

                <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{
                        backgroundImage: `url(${item.image})`
                    }}
                >
                    {/* <Link href={`/blog/${item._id}`} className="img-link" >
                    <a></a>
                    </Link> */}
                    <span className="top-right-icon bg-success">
                        <i className="elegant-icon icon_camera_alt"></i>
                    </span>
                    <ul className="social-share">
                        <li>
                            <a href="#">
                                <i className="elegant-icon social_share"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="fb" title="Share on Facebook" target="_blank">
                                <i className="elegant-icon social_facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tw" target="_blank" title="Tweet now">
                                <i className="elegant-icon social_twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="pt" target="_blank" title="Pin it">
                                <i className="elegant-icon social_pinterest"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="post-content p-30">
                    <div className="entry-meta meta-0 font-small mb-10">
                        <Link href={`/category/${item.category}`}>
                            <span className="post-cat text-info">{item.category}</span>
                        </Link>
                    </div>

                    <div className="d-flex post-card-content">
                        <h5 className="post-title mb-10 font-weight-900">
                            <Link href={`/blog/${item._id}`}>
                                {item.title}
                            </Link>
                        </h5>
                        {
                            isMyProfile && 
                            <Link href={`/blog/edit/${item._id}`}
                            className='mb-2'
                            >
                                <Button type='primary' size='small'>Edit Blog</Button>
                            </Link>
    
                        }
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase mt-2">
                            <span className="post-on">{moment(item.createdAt).format("MMM DD, YYYY")}</span>
                            {/* <span className="time-reading has-dot">{item.readTime} mins read</span> */}
                            <span className="post-by has-dot">{item.views} views</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;