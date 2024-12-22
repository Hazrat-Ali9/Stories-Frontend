import React from 'react';
import Layout from '../components/layout/layout';
import moment from 'moment';

const PrivacyPolicy = () => {
    return (
        <Layout>
            <div className='container mt-20'>
                <h1>Privacy Policy</h1>
                <p>Last updated: {moment().format('lll')}</p>

                <h2>Introduction</h2>
                <p>
                    Welcome to our blog. Your privacy is important to us. This Privacy
                    Policy explains how we collect, use, and protect your personal
                    information when you visit our website.
                </p>

                <h2>Information We Collect</h2>
                <ul>
                    <li>
                        <strong>Personal Information:</strong> When you subscribe to our
                        newsletter or leave a comment, we may collect your name, email
                        address, and other contact details.
                    </li>
                    <li>
                        <strong>Usage Data:</strong> We may collect information about your
                        browser, IP address, and how you interact with our website to improve
                        your experience.
                    </li>
                    <li>
                        <strong>Cookies:</strong> We use cookies to enhance your browsing
                        experience. You can control cookie settings through your browser.
                    </li>
                </ul>

                <h2>How We Use Your Information</h2>
                <ul>
                    <li>To provide and maintain our blog site.</li>
                    <li>To send you updates, newsletters, and promotional content.</li>
                    <li>To improve our website through user feedback and analytics.</li>
                    <li>To respond to your comments or inquiries.</li>
                </ul>

                <h2>Third-Party Services</h2>
                <p>
                    We may use third-party services like Google Analytics to understand user
                    behavior and improve our content. These services may collect information
                    about your usage of our site.
                </p>

                <h2>Data Security</h2>
                <p>
                    We take reasonable measures to protect your data, but please be aware
                    that no method of transmission over the Internet is 100% secure.
                </p>

                <h2>Your Rights</h2>
                <ul>
                    <li>You can request access to, correction of, or deletion of your data.</li>
                    <li>You can opt out of email communications at any time.</li>
                    <li>You can disable cookies through your browser settings.</li>
                </ul>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you
                    of any changes by posting the new policy on this page.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us
                    at
                    <a href="mailto:hazrataliein@gmail.com">
                        hazrataliein@gmail.com
                    </a>.
                </p>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;