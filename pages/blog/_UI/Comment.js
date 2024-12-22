import Link from 'next/link';
import React from 'react';

import CommentForm from './CommentForm';
import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import api from '../../../components/axios.instance';
import moment from 'moment';
import { Avatar } from 'antd';
import { useState } from 'react';
import { CloseCircleFilled } from '@ant-design/icons';
const Comment = ({ post }) => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['comments', post?._id],
        queryFn: async () => {
            const comments = await api.get(`/comment/post/${post?._id}`)
            const res = comments.data
            return res
        }
    })
    const [reply, setReply] = useState(null)
    const [cid, setCid] = useState(null)

    if (isLoading) {
        return <Spin size='large' />
    }

    return (
        <div>
            {/* <!--Comments--> */}
            <div className="comments-area">
                <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">
                        Comments
                    </h5>
                </div>
                {
                    data?.length === 0 ? <h4 className='text-center'>No comments yet</h4> :
                        data.map((item, i) => (
                            <div className="comment-list wow fadeIn animated">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <Avatar
                                                size={50}
                                                src={`${item.user.avatar}`}
                                                alt=""
                                            />
                                        </div>
                                        <div className="desc">
                                            <p className="comment">
                                                {item.comment}
                                            </p>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h5>
                                                        <Link href="/#">
                                                            <a>
                                                                {item.user.name}
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <p className="date">
                                                        {
                                                            moment(item.createdAt).fromNow()
                                                        }
                                                    </p>
                                                </div>
                                                <div className="reply-btn ml-3">
                                                    <div className='cursor-pointer'
                                                        style={{
                                                            cursor: 'pointer'
                                                        }}
                                                        onClick={() => {
                                                            setReply(reply ? null : item)
                                                            setCid(i)
                                                        }}>
                                                        <a className="btn-reply " href='#comment-form'>
                                                            <span className='mr-2'>
                                                                Reply
                                                            </span>
                                                            {
                                                                (reply && cid === i) ? <CloseCircleFilled /> : ''
                                                            }
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {item.reply && item.reply.map((cmntr, i) => ((
                                    <>
                                        <div className="single-comment depth-2 justify-content-between d-flex mt-20">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <Avatar
                                                        size={40}
                                                        src={`${cmntr.user.avatar}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">
                                                        {cmntr.comment}
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5>
                                                                <Link href="/#">
                                                                    <a>
                                                                        {
                                                                            cmntr.user.name
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </h5>
                                                            <p className="date">
                                                                {
                                                                    moment(cmntr.createdAt).fromNow()
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <a className="btn-reply ml-2">
                                                                Like
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                )))}
                                {
                                    (reply && cid === i) && <CommentForm post={post} refetch={refetch} reply={reply} />
                                }
                            </div>
                        ))}
            </div>
            {/* <!--comment form--> */}
            {
                !reply && <CommentForm post={post} refetch={refetch} reply={reply} />
            }
        </div>
    );
};

export default Comment;