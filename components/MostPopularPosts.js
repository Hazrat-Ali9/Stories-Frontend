import { useQuery } from '@tanstack/react-query';
import React from 'react';
import api from './axios.instance';
import Link from 'next/link';
import moment from 'moment';
import { Spin } from 'antd';

const MostPopularPosts = ({ user }) => {
    const { data: post, isLoading } = useQuery({
        queryKey: ['popular-post'],
        queryFn: async () => {
            const res = await api.get(`/blog?sort=true&limit=5`)
            return res.data
        }
    })

    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
            <div className="widget-header-1 position-relative mb-30">
                <h5 className="mt-5 mb-30">
                    Most popular
                </h5>
            </div>
            <div className="post-block-list post-module-1">
                <ul className="list-post">
                    {post?.map((item, i) => (
                        <li
                            key={i}
                            className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                <div className="post-content media-body">
                                    <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                        <Link href={`/blog/${item?._id}`}>
                                            <a>
                                                {item?.title}
                                            </a>
                                        </Link>
                                    </h6>
                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                        <span className="post-on">
                                            {moment(item?.createdAt).fromNow()}
                                        </span>
                                        <span className="post-by has-dot">
                                            {item?.views} views
                                        </span>
                                    </div>
                                </div>
                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                    <Link href={`/blog/${item?._id}`}>
                                        <a
                                            className="color-white"

                                        >
                                            <img
                                                src={`${item?.image}`}
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MostPopularPosts;