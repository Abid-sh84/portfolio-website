import React from "react";
import Image from "next/image";


import { motion } from "framer-motion";

const skills = [
  { name: "HTML", logo: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", logo: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", logo: "https://skillicons.dev/icons?i=javascript" },
  { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Express.js", logo: "https://skillicons.dev/icons?i=express" },
  { name: "React.js", logo: "https://skillicons.dev/icons?i=react" },
  { name: "Node.js", logo: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Tailwind", logo: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Python", logo: "https://skillicons.dev/icons?i=python" },
];

const tools = [
  { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
  { name: "GitHub", logo: "https://skillicons.dev/icons?i=github" },
  { name: "VS Code", logo: "https://skillicons.dev/icons?i=vscode" },
  { name: "Linux", logo: "https://skillicons.dev/icons?i=linux" },
  { name: "Postman", logo: "https://skillicons.dev/icons?i=postman" },
];

function Skills() {
  return (
    <motion.div
      className="techstack"
      id="techstack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="techstack-title">My Tech Stack</h2>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill.name} className="skill">
              <div className="skill-logo-container">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={50} // Specify width
                  height={50} // Specify height
                  className="skill-logo"
                />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="tools">
        <h3>Tools</h3>
        <div className="tools-list">
          {tools.map((tool) => (
            <div key={tool.name} className="tool">
              <div className="tool-logo-container">
                <Image
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width={50} // Specify width
                  height={50} // Specify height
                  className="tool-logo"
                />
              </div>
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
