import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import OnlineRecipeApp from "../../public/images/projects/Recipe.ioHomePage.png";
import WeatherApp from "../../public/images/projects/WeatherAppPhoto.png";
import Tenzies from "../../public/images/projects/TenziesApp.png";
import ExpenseTracker from "../../public/images/projects/ExpenseTrackerPhoto.png";
import CampTraveler from "../../public/images/projects/CampTravelerPhoto.png";
import Hired from "../../public/images/projects/HiredLandingPagePhoto.png";
import QuickCart from "../../public/images/projects/QuickCartDashboardPage.png";
import HireReady from "../../public/images/projects/HireReadyPhoto.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
    border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6
          text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
    border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Bryan&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Turning Ideas Into Reality"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl
          xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Recipe.io"
                summary="A recipe-sharing platform where users can explore, create, and
              favorite recipes. Features include dark mode, user ratings, user
              comments and a surprise recipe generator. Built using React,
              Firebase, and Cloud Firestore to deliver a dynamic and
              user-friendly experience."
                img={OnlineRecipeApp}
                link="https://online-recipe-19b1d.web.app/"
                github="https://github.com/bryankhor07/online-recipe-web-app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Weather App"
                summary="A weather app that displays the current weather, temperature, and
              humidity for a specific city. Created with React and styled with
              CSS for a clean and modern design."
                img={WeatherApp}
                link="https://easy-to-use-weatherapp.netlify.app/"
                github="https://github.com/bryankhor07/Weather-App"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Tenzies"
                summary="A fun dice-rolling game where the goal is to match all the dice to
              the same number. Built with React for an interactive and
              responsive experience."
                img={Tenzies}
                link="https://tenziesgameforkids123.netlify.app/"
                github="https://github.com/bryankhor07/Tenzies-Game"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Project"
                title="HireReady"
                summary="HireReady is an AI-powered platform designed to help job seekers 
                prepare for interviews. It offers a user-friendly interface that allows users 
                to generate mock interviews, practice them, and receive AI-driven feedback to 
                enhance their performance. Built with React, Tailwind CSS, and ShadCN UI, the 
                application delivers a modern and responsive design. The backend, powered by 
                Firebase, ensures secure authentication and efficient data management. Additionally, 
                HireReady integrates Vapi and Google Gemini to provide realistic interview simulations 
                and insightful feedback, making it a comprehensive tool for interview preparation."
                img={HireReady}
                link="https://hire-ready-iota.vercel.app/"
                github="https://github.com/bryankhor07/Hire-Ready"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Expense Tracker"
                summary="An expense tracker that allows users to add and delete expenses,
              as well as view the total balance. Developed with React and
              Firebase for a seamless and efficient experience."
                img={ExpenseTracker}
                link="https://expense-tracker-c3464.web.app/"
                github="https://github.com/bryankhor07/expense-tracker"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Hired"
                summary="Hired is a job search platform designed to seamlessly connect job seekers with 
                their ideal career opportunities while helping employers find top talent. Built with React, 
                Tailwind CSS, ShadCN UI, and JavaScript, the application offers a sleek and modern user 
                experience. The backend, powered by Supabase and Clerk, ensures secure authentication and 
                efficient data management. Hired prioritizes a user-friendly experience, making job 
                searching and hiring more intuitive and effective for everyone."
                img={Hired}
                link="https://hired-lime-sigma.vercel.app/"
                github="https://github.com/bryankhor07/Job-Portal"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Quick Cart"
                summary="QuickCart is a modern e-commerce platform designed for 
                a seamless and user-friendly shopping experience. Built with React, 
                HTML, and CSS, it features an intuitive interface for easy navigation. 
                The backend, powered by Firebase, ensures secure authentication and 
                efficient data management, making online shopping both convenient and reliable."
                img={QuickCart}
                link="https://quick-cart-blond.vercel.app/"
                github="https://github.com/bryankhor07/Quick-Cart"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
