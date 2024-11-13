"use client";
import React from "react";
import { Card, Link } from "@nextui-org/react";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

const PrivacyPolicyContent = () => (
  <Card className=" p-6">
    <h1 className={title({ color: "violet", size: "sm" })}>Privacy Policy</h1>

    <p className=" mt-5">
      At Applykite, we are committed to protecting and respecting your privacy.
      This Privacy Policy outlines how we collect, use, and protect your
      personal data.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h3>
    <div className="mb-4">
      We collect the following types of information:
      <ul className="list-disc list-inside ml-4">
        <li>
          <span className="font-semibold">Personal Information</span>: Your
          name, email address, payment information, and any other data you
          provide when signing up for our services.
        </li>
        <li>
          <span className="font-semibold">Usage Information</span>: Information
          about your interactions with our website, including pages visited and
          time spent on the site, through cookies and similar technologies.
        </li>
        <li>
          <span className="font-semibold">Third-Party Information</span>: Data
          from services such as Google when you choose to log in via Google
          Login.
        </li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Data</h3>
    <div className="mb-4">
      We use your personal information for:
      <ul className="list-disc list-inside ml-4">
        <li>Creating and managing your account.</li>
        <li>Processing payments for Premium and Pro accounts.</li>
        <li>Sending you updates about the services or features.</li>
        <li>Analyzing user activity to improve our services.</li>
        <li>Enforcing our Terms & Conditions.</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-2">
      Data Sharing and Security
    </h3>
    <p className="mb-4">
      Your data is secure with us. We do not share or sell your personal
      information with third parties except as required for payment processing
      (via Stripe and PayPal) or as mandated by law.
    </p>
    <p className="mb-4">
      We take reasonable technical measures, such as encryption and secure
      servers, to protect your personal data from unauthorized access,
      alteration, or disclosure.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">
      Cookies and Tracking Technologies
    </h3>
    <p className="mb-4">
      We use cookies to personalize your experience, provide essential website
      functionality, and understand how users interact with our website. You can
      manage your cookie preferences in your browser settings.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">User Data Rights</h3>
    <div className="mb-4">
      You have the right to:
      <ul className="list-disc list-inside ml-4">
        <li>
          <span className="font-semibold">Access</span> the data we hold about
          you.
        </li>
        <li>
          <span className="font-semibold">Request data deletion</span>: You can
          request that we delete your data by contacting{" "}
          <span className="font-semibold">
            support@applykite.com or applykite@gmail.com
          </span>
          . Upon request, we will delete your data and deactivate your account.
        </li>
        <li>
          <span className="font-semibold">Update your information</span> if it
          is incorrect or outdated.
        </li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h3>
    <p className="mb-4">
      We use third-party services for processing payments (Stripe, PayPal) and
      enabling login (Google Login). These services have their own privacy
      policies, and we encourage you to review them.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Payment Information</h3>
    <p className="mb-4">
      Payments are securely processed through Stripe and PayPal. We do not store
      your payment information on our servers. All payment data is encrypted and
      transmitted securely by the payment providers.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Data Retention</h3>
    <p className="mb-4">
      We retain your personal information only as long as necessary to fulfill
      the purposes outlined in this policy or as required by law.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Children’s Privacy</h3>
    <p className="mb-4">
      Our website is not intended for use by individuals under the age of 18. We
      do not knowingly collect personal information from children.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">
      Changes to This Privacy Policy
    </h3>
    <p className="mb-4">
      We reserve the right to update this Privacy Policy at any time. Any
      changes will be communicated via email or website notifications. Continued
      use of the website after changes are made constitutes acceptance of the
      updated policy.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
    <p className="mb-4">
      If you have any questions or concerns regarding this Privacy Policy,
      please contact us at{" "}
      <span className="font-semibold">
        <Link href={"mailto:" + siteConfig.links.email}>
          support@applykite.com
        </Link>
        <span className="mx-1">or</span>
        <Link href={"mailto:applykite@gmail.com"}>applykite@gmail.com</Link>
      </span>
      .
    </p>
  </Card>
);

export default PrivacyPolicyContent;
