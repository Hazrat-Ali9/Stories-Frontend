import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import api from './axios.instance';
import { Spin } from 'antd';
import moment from 'moment';
import { Image } from 'antd';

const LetestComments = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['letest-comments'],
        queryFn: async () => {
            const res = await api.get(`/comment?limit=5`)
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
                    Last comments
                </h5>
            </div>
            <div className="post-block-list post-module-2">
                <ul className="list-post">
                    {
                        data?.map((item, i) => (
                            <li key={i} className="mb-30 wow fadeInUp animated">
                                <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                    <div className=" d-flex mr-15  overflow-hidden">
                                        <Link href={`/blog/${item.post._id}`}>
                                            <a
                                                className="color-white"
                                            >
                                                <Image
                                                preview={false}
                                                    src={item.post.image}
                                                    width={84}
                                                    height={74}
                                                    style={{
                                                        objectFit: 'fill'
                                                    }}
                                                    alt=""
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content media-body">
                                        <p className="mb-10">
                                            <Link href={`/author/${item.user._id}`}>
                                                <a>
                                                    <strong>
                                                        {item.user.name}
                                                    </strong>
                                                </a>
                                            </Link>
                                            <span className="font-small text-muted has-dot d-block">
                                                {moment(item.createdAt).format('lll')}
                                            </span>
                                        </p>
                                        <p className="text-muted font-small">
                                            {item.comment?.slice(0, 50)}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }


                </ul>
            </div>
        </div>
    );
};

export default LetestComments;