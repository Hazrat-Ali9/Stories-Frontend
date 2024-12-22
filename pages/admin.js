import React from 'react';
import PrivateLayout from '../components/layout/PrivateLayout';
import Categorys from '../components/Setting/Categorys';
import { useRouter } from 'next/router';
import Blogs from '../components/Setting/Blogs';
import Users from '../components/Setting/Users';

const settings = () => {
    const query = useRouter().query
    const category = query?.category
    return (
        <PrivateLayout>
            {
                category === 'category' && <Categorys />
            }
            {
                (category === 'blog' || !category) && <Blogs />
            }
            {
                (category === 'users') && <Users />
            }
        </PrivateLayout>
    );
};

export default settings;