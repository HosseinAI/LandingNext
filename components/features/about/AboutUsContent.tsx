"use client";

import React from "react";
import { Card, Button, Avatar } from "@nextui-org/react";
import Link from "next/link";
import {
  User,
  BookOpenText,
  Rocket,
  MessageCircleHeart,
  Mail,
} from "lucide-react";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

const AboutUsContent = () => {
  const testimonials = [
    {
      quote:
        '"ApplyKite helped me find a fully funded PhD position that I wouldn\'t have discovered otherwise. Their AI tools made my application stand out!"',
      name: "Sahar",
      title: "PhD Candidate",
    },
    {
      quote:
        '"The Apply Planner kept me organized throughout my application journey. I highly recommend ApplyKite to anyone pursuing higher education."',
      name: "Amir",
      title: "Post-doc Researcher",
    },
  ];

  const socialLinks = [
    {
      name: "Telegram",
      url: siteConfig.links.telegram,
    },
    {
      name: "Twitter",
      url: siteConfig.links.twitter,
    },
    {
      name: "LinkedIn",
      url: siteConfig.links.linkedin,
    },
  ];

  return (
    <div className="bg-white py-10 max-w-4xl mx-auto">
      <div className="flex justify-center flex-col items-center gap-4 text-center">
        <h1 className={title({ color: "violet", size: "sm" })}>
          ApplyKite: Your Smart Pathway to Academic Excellence
        </h1>
        <p>
          Unlock a world of fully funded PhD positions, post-doc opportunities,
          and research collaborations with AI-powered tools designed to elevate
          your academic journey.
        </p>
      </div>
      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2 text-primary">
          <span>
            <Rocket />
          </span>{" "}
          Our Mission
        </h2>
        <p className="mb-4">
          At <span className="font-semibold">ApplyKite</span>, our mission is to
          revolutionize the higher education application process by making it
          smarter, more accessible, and efficient for students worldwide. We
          connect aspiring scholars with fully funded PhD positions, post-doc
          opportunities, and renowned professors, simplifying the path to
          academic success.
        </p>
      </div>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span>
          <BookOpenText />
        </span>{" "}
        Our Story
      </h2>
      <p className="mb-4">
        <span className="font-semibold">Founded in 2020</span> during the global
        pandemic, ApplyKite emerged from the firsthand experiences of a
        post-doctoral researcher in London. Our founder envisioned a platform
        that could <span className="underline">ease this process</span> for
        students everywhere.
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <span className="font-semibold">2020</span>: ApplyKite begins as a
          community to assist students.
        </li>
        <li>
          <span className="font-semibold">2023</span>: Launches as a Telegram
          bot with over <span className="font-semibold">10,000 users</span>.
        </li>
        <li>
          <span className="font-semibold">August 2024</span>: Website platform
          launched with <span className="font-semibold">5,000+ users</span>.
        </li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span>
          <User />
        </span>{" "}
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Discover Fully Funded Opportunities",
            details: [
              "Access over 50,000 fully funded PhD and post-doc opportunities worldwide.",
              "Daily additions of more than 500 new positions sourced from the web and social media.",
            ],
            keywords:
              "PhD Position, PhD Opportunity, Post-doc Opportunity, Apply for PhD",
          },
          {
            title: "Connect with Professors and Supervisors",
            details: [
              "Explore a database of over 0.5 million professors for research collaborations.",
              "100,000 new professors added annually.",
            ],
            keywords: "PhD Supervisors, Research Collaboration Platform",
          },
          {
            title: "AI-Powered Application Tools",
            details: [
              "Generate personalized email samples, review Statements of Purpose (SoP), and CVs tailored to your resume and position requirements.",
              "Utilize AI to match your profile with professors' interests.",
            ],
            keywords: "Apply with AI, Smart Apply",
          },
          {
            title: "Stay Informed with Daily Alerts",
            details: [
              "Receive daily alerts of new fully funded positions that align with your interests.",
              "Use Apply Planner to track your application journey.",
            ],
            keywords: "",
          },
        ].map((offer, index) => (
          <Card key={index} className="p-4 flex flex-col" style={{ flex: 1 }}>
            <h3 className="text-lg font-semibold mb-2 text-teal-600">
              {offer.title}
            </h3>
            <ul className="list-disc list-inside ml-4">
              {offer.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm mt-2">{offer.keywords}</p>
          </Card>
        ))}
      </div>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span>
          <MessageCircleHeart />
        </span>{" "}
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-3">
              <Avatar
                className="bg-green-400"
                icon={
                  <span>
                    <User />
                  </span>
                }
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
            <p className="mt-4">{item.quote}</p>
          </Card>
        ))}
      </div>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span>
          <Mail />
        </span>{" "}
        Get Started Today
      </h2>
      <p className="mb-4 font-semibold">
        Embark on your journey towards academic excellence with ApplyKite.
      </p>
      <div className="flex gap-4">
        <Button
          as={Link}
          color="primary"
          href={siteConfig.links.webapp}
          size="lg"
        >
          Sign Up Now
        </Button>
        <Button
          as={Link}
          color="default"
          href="mailto:support@applykite.com"
          size="lg"
        >
          Contact Us
        </Button>
      </div>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
      <p>
        <span className="font-semibold">Email</span>:{" "}
        <a className="text-blue-500" href="mailto:support@applykite.com">
          support@applykite.com
        </a>
      </p>
      <p>
        <span className="font-semibold">Address</span>: Plangton Ltd., London,
        UK
      </p>
      <p>
        <span className="font-semibold">Social Media</span>: Follow us on{" "}
        <a
          className="text-blue-500"
          href={siteConfig.links.telegram}
          rel="noreferrer"
          target="_blank"
        >
          Telegram
        </a>
        ,{" "}
        <a
          className="text-blue-500"
          href={siteConfig.links.twitter}
          rel="noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        , and{" "}
        <a
          className="text-blue-500"
          href={siteConfig.links.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        .
      </p>

      <hr className="my-8" />

      <p className="text-center italic">
        Optimize your academic journey with ApplyKite—the smarter way to apply.
      </p>
      <p className="text-center mt-4">
        ApplyKite © 2024. All rights reserved.
      </p>
    </div>
  );
};

export default AboutUsContent;
