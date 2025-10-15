import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const Certificate = ({
  title,
  issuer,
  date,
  credentialId,
  credentialUrl,
  skills,
  img,
}) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
    border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      {img && (
        <Link
          href={credentialUrl}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-72"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
      )}

      <div
        className={`w-full flex flex-col items-start justify-between ${
          img ? "mt-4" : ""
        }`}
      >
        <span className="text-primary font-medium text-lg dark:text-primaryDark lg:text-base md:text-sm">
          {issuer}
        </span>
        <Link
          href={credentialUrl}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light lg:text-xl md:text-lg">
            {title}
          </h2>
        </Link>

        <p className="text-sm text-dark dark:text-light mb-3">{date}</p>

        {skills && skills.length > 0 && (
          <div className="w-full mb-3">
            <p className="text-xs font-semibold text-dark dark:text-light mb-2">
              Skills:
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-primary dark:bg-primaryDark text-light dark:text-dark rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        <Link
          href={credentialUrl}
          target="_blank"
          className="text-base font-semibold underline dark:text-light hover:text-primary dark:hover:text-primaryDark transition md:text-sm"
        >
          View Credential
        </Link>
      </div>
    </article>
  );
};

const Certificates = () => {
  const certificates = [
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      issuer: "Microsoft & LinkedIn",
      date: "Issued: July 2025",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/9c225eb5e1060d528a699f23c8eefb63fc84f976fe56011c955bf17e68876a59?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNTEUSbIJQ3KBlLNQtrHkZA%3D%3D",
      skills: [
        "Microsoft Copilot",
        "Responsible AI",
        "Generative AI",
        "Prompt Engineering",
        "Artificial Intelligence for Business",
      ],
      img: null,
    },
    {
      title:
        "Career Essentials in Administrative Assistance by Microsoft and LinkedIn",
      issuer: "Microsoft & LinkedIn",
      date: "Issued: May 2025",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/924c0d24ccb455ab55afcc6534d12c5880ad0ef9cef40473014dff9370f39164?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNTEUSbIJQ3KBlLNQtrHkZA%3D%3D",
      skills: [
        "Administrative Assistance",
        "Business Communications",
        "Microsoft 365",
        "Office Administration",
      ],
      img: null,
    },
    {
      title:
        "American Staffing Association Corporate Recruiting Professional Certificate",
      issuer: "American Staffing Association & LinkedIn",
      date: "Issued: May 2025",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/dbd2da6df0d089f2a8af7120cc169eddc96efd319d25cc61892dd5c1f1eabd8b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNTEUSbIJQ3KBlLNQtrHkZA%3D%3D",
      skills: [
        "Talent Management",
        "Job Description Development",
        "Recruiting",
        "Hiring",
      ],
      img: null,
    },
    {
      title: "Design User Experiences with Figma",
      issuer: "LinkedIn",
      date: "Issued: June 2025",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/09a15f900c3119e1015f88efd6cdf95ab6b42c3c971402e2afc8c81f6693b824?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNTEUSbIJQ3KBlLNQtrHkZA%3D%3D",
      skills: [
        "User Interface Prototyping",
        "User Experience",
        "User Experience Design",
        "User Interface Design",
        "Figma",
      ],
      img: null,
    },
  ];

  return (
    <>
      <Head>
        <title>Bryan's Certificates</title>
        <meta
          name="description"
          content="Professional certifications and credentials"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Continuous Learning & Growth"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="mb-8">
            <p className="text-lg text-dark dark:text-light">
              A collection of professional certifications and credentials
              showcasing my commitment to staying current with industry
              standards and best practices.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-12 gap-y-16 xl:gap-x-8 lg:gap-x-6 md:gap-y-12 sm:gap-x-0">
            {certificates.map((cert, idx) => (
              <div key={idx} className="col-span-6 sm:col-span-12">
                <Certificate
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  credentialUrl={cert.credentialUrl}
                  skills={cert.skills}
                  img={cert.img}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Certificates;
