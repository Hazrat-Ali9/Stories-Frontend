import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from 'react';
import app from '../util/firebase.init';
import api from "./axios.instance";
import toast from "react-hot-toast";
const Social = () => {
    const auth = getAuth(app);

    const loginWithFacebook = () => {

    }
    const provider = new GoogleAuthProvider();
    const loginWithGoogle = async () => {

        signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;

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
                } catch (error) {
                    console.log(error)
                }
            }).catch((error) => {
                // // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.customData.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                console.error(error);
            });
    }
    return (
        <ul className="btn-login list_none text-center mb-15">
            <li>
                <button
                    onClick={loginWithFacebook}
                    className="btn btn-facebook py-2 text-white"
                >
                    <i className="elegant-icon social_facebook  mr-5"></i>
                    Facebook
                </button>
            </li>
            <li>
                <button
                    onClick={loginWithGoogle}
                    className="btn btn-google py-2 text-white"
                >
                    <i className="elegant-icon social_googleplus mr-5"></i>
                    Google
                </button>
            </li>
        </ul>
    );
};

export default Social;