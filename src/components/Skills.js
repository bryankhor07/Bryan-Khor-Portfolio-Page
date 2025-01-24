import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6
        shadow-dark cursor-pointer absolute pos dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8
        shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="0vw" y="-9vw" />
        <Skill name="HTML" x="-13vw" y="0vw" />
        <Skill name="JavaScript" x="13vw" y="0vw" />
        <Skill name="React.js" x="0vw" y="9vw" />
        <Skill name="Next.js" x="-15vw" y="-12vw" />
        <Skill name="Figma" x="15vw" y="-12vw" />
        <Skill name="Firebase" x="-15vw" y="12vw" />
        <Skill name="Tailwind CSS" x="15vw" y="12vw" />
        <Skill name="Python" x="0vw" y="-20vw" />
        <Skill name="Node.js" x="-28vw" y="0vw" />
        <Skill name="Express.js" x="28vw" y="0vw" />
        <Skill name="MongoDB" x="0vw" y="20vw" />
        <Skill name="Git" x="-28vw" y="-15vw" />
        <Skill name="GitHub" x="28vw" y="-15vw" />
        <Skill name="SQL" x="-28vw" y="15vw" />
        <Skill name="C++" x="28vw" y="15vw" />
      </div>
    </>
  );
};

export default Skills;
