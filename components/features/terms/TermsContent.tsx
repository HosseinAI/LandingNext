"use client";
import React from "react";
import { Card, Link } from "@nextui-org/react";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

const TermsContent = () => (
  <Card className=" p-6">
    <h1 className={title({ color: "violet", size: "sm" })}>
      TermsAndConditions
    </h1>

    <p className="mt-5">
      Welcome to Applykite, a service offered by Plangton LTD. By accessing or
      using our website (www.applykite.com), you agree to the following Terms &
      Conditions. If you do not agree, please refrain from using the website.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Account Types</h3>
    <div className="mb-4">
      We offer three types of accounts:
      <ul className="list-disc list-inside ml-4">
        <li>Basic Account: Free access to limited services.</li>
        <li>Premium Account: Access to enhanced services for a fee.</li>
        <li>Pro Account: Access to all features and services for a fee.</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-2">Use of Cookies</h3>
    <p className="mb-4">
      We may use cookies to enhance your browsing experience, provide
      personalized content, and understand user behavior. You can control your
      cookie preferences in your browser settings.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Data Security & Privacy</h3>
    <p className="mb-4">
      Your personal data is securely stored in compliance with applicable data
      protection laws. We implement encryption and industry-standard security
      measures to protect your data from unauthorized access. For more details,
      please review our{" "}
      <a className="text-blue-500" href="/privacy-policy">
        Privacy Policy
      </a>
      .
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Deleting Your Data</h3>
    <p className="mb-4">
      You have the right to request deletion of your data at any time. To do so,
      please contact our support team at{" "}
      <span className="font-semibold">
        support@applykite.com or applykite@gmail.com
      </span>
      . Once your data is deleted, you will lose access to your account and any
      associated services.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Payments and Refunds</h3>
    <p className="mb-4">
      Payments for Premium and Pro accounts are processed through Stripe and
      PayPal, both of which are secure and widely recognized payment gateways.
    </p>
    <p className="mb-4">
      Refunds are only available within 7 days after the purchase, and only if
      there is a verified technical issue with the website that affects your use
      of the service. Users must collaborate with our support team at{" "}
      <span className="font-semibold">support@applykite.com</span> to resolve
      the issue before requesting a refund. No refunds will be processed after
      this 7-day period or if the issue is not related to a technical fault.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h3>
    <div className="mb-4">
      All content on Applykite, including but not limited to text, graphics,
      logos, and software, is the property of Plangton LTD. Users are prohibited
      from:
      <ul className="list-disc list-inside ml-4">
        <li>
          Copying, distributing, or reverse engineering any part of the website.
        </li>
        <li>
          Using the website’s content for commercial purposes without
          permission.
        </li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-2">Misuse of Services</h3>
    <div className="mb-4">
      Any misuse of the Applykite website, such as:
      <ul className="list-disc list-inside ml-4">
        <li>Exploiting technical vulnerabilities,</li>
        <li>Engaging in illegal activities, or</li>
        <li>Disrupting other users’ experience</li>
      </ul>
      May result in the suspension or termination of your account without
      notice.
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-2">
      Google Integration & Data Sharing
    </h3>
    <p className="mb-4">
      By signing in with Google Login, you agree that we may collect and store
      your basic profile information (such as name and email address) to create
      and manage your Applykite account. This information is securely handled
      according to our{" "}
      <a className="text-blue-500" href="/privacy-policy">
        Privacy Policy
      </a>
      , and you may revoke Google’s access at any time through your Google
      Account settings.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Modification of Terms</h3>
    <p className="mb-4">
      We reserve the right to modify these Terms & Conditions at any time.
      Changes will be communicated to users via email or notification on the
      website. Continued use of the website after changes take effect
      constitutes your acceptance of the updated terms.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Governing Law</h3>
    <p className="mb-4">
      These Terms & Conditions are governed by the laws of the United Kingdom.
      Any disputes arising from the use of our website shall be resolved in the
      jurisdiction of the courts of the United Kingdom.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
    <p className="mb-4">
      For any questions or concerns regarding these Terms & Conditions, please
      contact us at{" "}
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

export default TermsContent;
