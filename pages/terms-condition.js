import React from "react";
import Layout from "../components/layout/layout";
import moment from "moment";

const TermsAndConditions = () => {
    return (
        <Layout>
            <div className="container mt-20">
                <h1>Terms and Conditions</h1>
                <p>Last updated: {
                    moment().format('lll')
                }</p>

                <h2>Introduction</h2>
                <p>
                    Welcome to our blog site. By accessing or using our website, you agree
                    to comply with and be bound by these Terms and Conditions. Please read
                    them carefully before using our site.
                </p>

                <h2>Use of Content</h2>
                <p>
                    All content on this website, including articles, images, and other
                    media, is provided for informational purposes only. You may not
                    reproduce, distribute, or use any content without prior written
                    permission from us.
                </p>

                <h2>User Responsibilities</h2>
                <ul>
                    <li>You must be at least 13 years old to use this website.</li>
                    <li>
                        You agree not to post any harmful, illegal, or inappropriate content
                        in the comments section.
                    </li>
                    <li>
                        You are responsible for maintaining the confidentiality of your
                        account details.
                    </li>
                </ul>

                <h2>Prohibited Activities</h2>
                <p>
                    When using our site, you agree not to engage in activities such as:
                </p>
                <ul>
                    <li>Using the site for any unlawful purpose.</li>
                    <li>Uploading viruses or malicious code.</li>
                    <li>Engaging in any activity that disrupts the functionality of the website.</li>
                    <li>Spamming or unauthorized advertising.</li>
                </ul>

                <h2>Intellectual Property</h2>
                <p>
                    The content, logos, and trademarks on this site are owned by us or our
                    content creators. You are not permitted to use these materials without
                    explicit permission.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                    Our website may contain links to third-party websites or services that
                    are not owned or controlled by us. We are not responsible for the
                    content or practices of any third-party sites.
                </p>

                <h2>Disclaimer</h2>
                <p>
                    The content on our blog site is provided "as is" without any warranties
                    of any kind. We do not guarantee the accuracy, completeness, or
                    reliability of any information on this site.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                    We shall not be held liable for any damages arising from your use of our
                    website or reliance on its content. This includes, but is not limited
                    to, direct, indirect, incidental, or consequential damages.
                </p>

                <h2>Changes to Terms and Conditions</h2>
                <p>
                    We reserve the right to update or modify these Terms and Conditions at
                    any time without prior notice. Your continued use of the website
                    constitutes acceptance of the new terms.
                </p>

                <h2>Termination</h2>
                <p>
                    We reserve the right to suspend or terminate your access to our website
                    if you violate these Terms and Conditions.
                </p>

                <h2>Governing Law</h2>
                <p>
                    These Terms and Conditions shall be governed by the laws of [Your
                    Country]. Any disputes arising from these terms will be subject to the
                    exclusive jurisdiction of the courts in [Your City].
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about these Terms and Conditions, please
                    contact us at <a href="mailto:hazrataliein@gmail.com">hazrataliein@gmail.com</a>.
                </p>
            </div>
        </Layout>
    );
};

export default TermsAndConditions;