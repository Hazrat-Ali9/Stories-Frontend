import Link from "next/link";
import Layout from "./../components/layout/layout";
import Social from "../components/Social";
import api from "../components/axios.instance";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../util/firebase.init";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
function Login() {
    const auth = getAuth(app);
    const navigate = useRouter();

    const submitHandler = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;

                    const newUser = {
                        name: user.displayName,
                        email: user.email,
                        socialLogin: true,
                        about: "",
                        avatar: user.photoURL,
                        social: null,
                        token: user.accessToken
                    }
                    try {
                        const res = await api.post('/users', newUser)
                        toast.success('Login successfully')
                        console.log(res);
                        navigate.push('/')
                    } catch (error) {
                        console.log(error)
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                });

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <Layout>
                <main className="bg-grey pt-80 pb-50">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-md-10">
                                <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                                    <div className="padding_eight_all bg-white">
                                        <div className="heading_s1 text-center">
                                            <h3 className="mb-30 font-weight-900">
                                                Login
                                            </h3>
                                        </div>
                                        <form onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    required
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Your Email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    required
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="login_footer form-group">
                                                <div className="chek-form">
                                                    <div className="custome-checkbox">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="checkbox"
                                                            id="exampleCheckbox1"
                                                            value=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="exampleCheckbox1"
                                                        >
                                                            <span>
                                                                Remember me
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <a className="text-muted" href="#">
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="button button-contactForm btn-block"
                                                >
                                                    Log in
                                                </button>
                                            </div>
                                        </form>
                                        <div className="divider-text-center mt-15 mb-15">
                                            <span> or</span>
                                        </div>
                                        <Social />
                                        <div className="text-muted text-center">
                                            Don't Have an Account?{" "}
                                            <Link href="/page-register">
                                                <a>
                                                    Sign up now
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
export default Login;
