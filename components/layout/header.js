import Link from "next/link";
import Menu from "./menu";
import { useEffect, useState } from "react";
import api from "../axios.instance";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../util/firebase.init";
import { useRouter } from "next/router";
import { Spin } from "antd";

const Header = ({ addClass, openSearch }) => {
    const [categories, setCategories] = useState([])
    const [currentuser, setCurrentUser] = useState(null)
    const [user] = useAuthState(getAuth(app));

    const path = useRouter()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [path])
    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await api.get('/blog/category')
                setCategories(res?.data || [])

            } catch (error) {
                toast.error(error?.response?.data?.message || error?.message || 'Something went wrong')
            }
        }
        getCategories()
    }, [])
    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await api.get(`/users/find/one?email=${user?.email}`)
                setCurrentUser(res.data)

            } catch (error) {
                toast.error(error?.response?.data?.message || error?.message || 'Something went wrong')
            }
        }
        getCategories()
    }, [user])
    return (
        <>
            <Spin spinning={loading} fullscreen size="large" />
            <header className="main-header header-style-1 font-heading">
                <div className="header-top">
                    <div className="container">
                        <div className="row pt-20 pb-20">
                            <div className="col-md-3 col-xs-6">
                                <Link href="/">
                                    <a>
                                        <img
                                            className="logo"
                                            src="/assets/imgs/theme/logo.png"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-md-9 col-xs-6 text-right header-top-right ">
                                {/* <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span> */}
                                <button className="search-icon d-none d-md-inline" onClick={openSearch}>
                                    <span className="mr-15 text-muted font-small">
                                        <i className="elegant-icon icon_search mr-5"></i>
                                        Search
                                    </span>
                                </button>
                                {
                                    currentuser ?
                                        <Link href={`/author/${currentuser?._id}`}>
                                            <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">
                                                Profile
                                            </button>
                                        </Link>
                                        :
                                        <Link href={'/page-login'}>
                                            <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">
                                                Login
                                            </button>
                                        </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Menu addClass={addClass} categories={categories} />
            </header>
        </>
    );
};

export default Header;
