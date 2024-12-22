import React from 'react';
import api from './axios.instance';
import toast from 'react-hot-toast';

const SubscribeForm = () => {
    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            const email = e.target.email.value;
            const res = await api.post('/users/subscribe',{email})
            toast.success(res?.data?.message || 'Subscribe successfully')
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message || 'Something went wrong')
        }
    }
    return (
        <form className="input-group form-subcriber mt-30 d-flex"
            onSubmit={submitHandler}
        >
            <input
                type="email"
                className="form-control bg-white font-small"
                placeholder="Enter your email"
                name='email'
                required
            />
            <button
                className="btn bg-primary text-white"
                type="submit"
            >
                Subscribe
            </button>
        </form>
    );
};

export default SubscribeForm;