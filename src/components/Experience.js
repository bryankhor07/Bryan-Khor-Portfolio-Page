import React from "react";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Frontend Engineer"
            company="CodeDay Labs"
            companyLink="https://labs.codeday.org/"
            time="June 2024 - August 2024"
            address="Remote"
            work="Collaborated with a team of three and was mentored by an eBay software engineer to contribute to Oppia, an open-source
education platform that aims to facilitate the creation and sharing of interactive learning activities. Fixed a frontend bug using Angular, HTML, and CSS, enabling users to click the restart button regardless of the mobile
navigation bar state, improving the quality of life for at least 30% of users. Overcame the challenge of using Docker to build the Oppia server. Multiple attempts of research were needed to find a
solution to the error.
"
          />
          <Details
            position="Frontend Engineer"
            company="CodeDay Labs"
            companyLink="https://labs.codeday.org/"
            time="September 2023 - October 2023"
            address="Remote"
            work="Contributed to TimeSketch, an open-source forensic timeline analysis tool used to collaboratively examine, analyze, and
investigate event-based data. Implemented a user-facing feature using Vue.js that dynamically displays descriptions in a tooltip when a user hovers over
icons utilizing lifecycle hooks and directives."
          />
          <Details
            position="Software Lab Instructor"
            company="San Francisco State University"
            companyLink="https://www.sfsu.edu/"
            time="January 2022 - December 2022"
            address="San Francisco, CA"
            work="Introduced Java programming concepts and lab assignments to 120 students through engaging and informative lectures. Enhanced student performance with hands-on support, as evidenced by a 15% increase in average assignment scores tracked
through grading analytics.
"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
