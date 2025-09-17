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
import Hired from "../../public/images/projects/HiredLandingPagePhoto.png";
import QuickCart from "../../public/images/projects/QuickCartDashboardPage.png";
import HireReady from "../../public/images/projects/HireReadyPhoto.png";
import AppleFigmaDesign from "../../public/images/projects/AppleFigmaDesign.png";
import SentierFigmaDesign from "../../public/images/projects/SentierFigmaDesign.png";
import TwoTreesFigmaDesign from "../../public/images/projects/TwoTreesFigmaDesign.png";
import SurveyFigmaDesign from "../../public/images/projects/SurveyFigmaDesign.png";
import InstagramProfileFigmaDesign from "../../public/images/projects/InstagramProfileFigmaDesign.png";
import ValorantFigmaDesign from "../../public/images/projects/ValorantFigmaDesign.png";
import QuickCartFigmaDesign from "../../public/images/projects/QuickCartFigmaDesign.png";
import CustomerSupportTicketTracker from "../../public/images/projects/CustomerSupportTicketTracker.png";
import InventoryManagementSystem from "../../public/images/projects/InventoryManagementSystem.png";
import EmployeeLeaveTracker from "../../public/images/projects/EmployeeLeaveTracker.png";
import ExpenseTrackerExcel from "../../public/images/projects/ExpenseTracker.png";
import SalesCommissionTracker from "../../public/images/projects/SalesCommissionTracker.png";
import MatchBoxPhoto from "../../public/images/projects/MatchBoxPhoto.png";
import OrganizeXPhoto from "../../public/images/projects/OrganizeXPhoto.png";
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

const Project = ({ title, type, img, summary, link, github }) => {
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
          className="w-full h-72"
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
                type="Full Stack Application"
                title="MatchBox"
                summary="MatchBox is a modern matchmaking web application built with Next.js, Supabase, and Stream. MatchBox enables users to create profiles, discover potential matches, chat in real-time, and even connect through live video calls."
                img={MatchBoxPhoto}
                link="https://match-box-7213.vercel.app/"
                github="https://github.com/bryankhor07/Match-Box"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Full Stack Application"
                title="OrganizeX"
                summary="OrganizeX is a modern task management and collaboration tool that helps you stay productive by organizing projects into boards, columns, and tasks. It’s built with Next.js for fast file-based routing, Supabase for real-time subscriptions and storage, and Clerk for authentication and subscription billing integration."
                img={OrganizeXPhoto}
                link="https://organize-x.vercel.app/"
                github="https://github.com/bryankhor07/OrganizeX"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Full Stack Application"
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
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Basic Project"
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
                type="Basic Project"
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
                type="Full Stack Application"
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
                type="Full Stack Application"
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
                type="Full Stack Application"
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
                type="Full Stack Application"
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
                type="Figma Design"
                title="Apple Product Page"
                summary="A Figma design of an Apple product page, showcasing a sleek and modern layout
                with a focus on user experience and aesthetics."
                img={AppleFigmaDesign}
                link="https://www.figma.com/proto/CU5Txis70KJMsGYPWCFhcR/Apple-Home-Page?node-id=0-1&p=f&t=oCX0MPvQ5ufXZmSw-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A3"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Figma Design"
                title="Sentier Website"
                summary="A Figma design of the Sentier website, showcasing a modern and
                responsive layout with a focus on visual appeal. Animations enhance the user experience, making it a dynamic and welcoming platform."
                img={SentierFigmaDesign}
                link="https://www.figma.com/proto/Flfak8N8RCGOGh7EGXvadt/Sentier-Website?node-id=10-19&p=f&t=18bR1QCCgUr0YXKb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A19"
                github=""
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Figma Design"
                title="Valorant Guide"
                summary="A Figma design of Valorant Guide that includes agents, weapons, and maps. It features a clean and modern layout with a focus on user experience and accessibility. The design incorporates Figma's use of components and interactions to create a dynamic and interactive design."
                img={ValorantFigmaDesign}
                link="https://www.figma.com/proto/sZARqBsTKmEfQpE7If0Q0W/Valorant-Agents-Guide?node-id=15-383&p=f&t=XXdykZZSFy924amV-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A383"
                github=""
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Figma Design"
                title="Quick Cart"
                summary="A clean, user-friendly design for Quick Cart, focused on simplicity, accessibility, and seamless interactions. This prototype leverages Figma components, auto layout, and interactive elements to create a dynamic, intuitive shopping experience."
                img={QuickCartFigmaDesign}
                link="https://www.figma.com/proto/rvAL2KQEW3NRwMWlFnOQR0/Quick-Cart?node-id=1-46&p=f&t=z55PDbh3DdOuvif6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A46"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Figma Design"
                title="Survey Form"
                summary="A Figma design of a survey form, showcasing a clean and
                user-friendly layout that emphasizes ease of use and accessibility. It focuses on Figma's use of components and interactions to create a dynamic and interactive design."
                img={SurveyFigmaDesign}
                link="https://www.figma.com/proto/77FtcOx76mT64mImt1wB2Q/03_05?node-id=1-60&t=fDNqxZSpQqkhENDj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Figma Design"
                title="Two Trees"
                summary="A Figma design of the Two Trees website, featuring a clean and
                modern layout with a focus on user experience. It focuses on Figma's use of variables and conditional logic to create a dynamic and interactive design."
                img={TwoTreesFigmaDesign}
                link="https://www.figma.com/proto/GGWb52HY9OFvWTNvKolwE0/Two-Trees?node-id=95-48&p=f&t=a2qKfO5jNupV9Kmj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=95%3A18"
                github=""
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Figma Design"
                title="Instagram Profile"
                summary="A Figma design of an Instagram profile, featuring a clean and
                modern layout with a focus on user experience. It showcases Figma's use of components and interactions to create a dynamic and interactive design."
                img={InstagramProfileFigmaDesign}
                link="https://www.figma.com/proto/Rg3lctlqP7PlXWXP4fPr2r/Instagram-Profile-Page?node-id=1-5&p=f&t=fKjrDSduDQAn7n1h-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Excel"
                title="Customer Support Ticket Tracker"
                summary="Developed a system to track support tickets by agent, category, and resolution time, complete with filters and KPI dashboards."
                img={CustomerSupportTicketTracker}
                link="https://1drv.ms/x/c/1938dfbf8bd9052a/EWRO4ZpYcFJCv9KmCXkqDPAB1gmZ7kuhFxUM99BYy3GWiw?e=UX4oyU"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Excel"
                title="Inventory Management System"
                summary="Built a system to monitor inventory levels, calculate reorder needs, and visualize low-stock items using conditional formatting and charts."
                img={InventoryManagementSystem}
                link="https://1drv.ms/x/c/1938dfbf8bd9052a/EaMFVNNFsilDrr6nWidhHM0BemhSHIugZhXlLz5R18RUrw?e=tC5hsw"
                github=""
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Excel"
                title="Employee Leave Tracker"
                summary="Developed a leave management system to track employee entitlements, leave usage, and current leave status across departments. Utilized SUMIFS to calculate total leave taken per employee and XLOOKUP to retrieve employee details. Applied conditional formatting to highlight employees currently on leave and created key performance indicators (KPIs) such as Total Employees, Days Taken, and Open Requests for at-a-glance insights."
                img={EmployeeLeaveTracker}
                link="https://1drv.ms/x/c/1938dfbf8bd9052a/EV0ZHakC9x1KrJQQJDoOA88BvehOaNYWWMaxlVXk5qDVwQ?e=d4pVfK"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Excel"
                title="Expense Tracker"
                summary="Built an automated tracker to compare actual spending against budget by category and visually flag over/under budget items."
                img={ExpenseTrackerExcel}
                link="https://1drv.ms/x/c/1938dfbf8bd9052a/EVZ90MZ5FSRPqytBaVi3V4UBr3Xm0EmKknF6VDV4HZvGmQ?e=LDlsSj"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Excel"
                title="Sales Commission Tracker"
                summary="Tracked sales rep performance and calculated earned commissions using tiered logic, pivot charts, and KPI summaries."
                img={SalesCommissionTracker}
                link="https://1drv.ms/x/c/1938dfbf8bd9052a/EffZuEsHrjBHgniIOl3HHJ8BKCWJkz-d2OlMKH-vgvfuwA?e=ugi4Sr"
                github=""
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
