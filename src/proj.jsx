import React, { useRef, useEffect } from "react";
import "./proj.css";
import { motion, useAnimation } from "framer-motion";

export default function Proj() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const projects = [
    {
      title: "Ecommerce Admin",
      description:
        "The admin panel boasts an intuitive dashboard with key metrics like sales trends, customer analytics, and inventory status. Customizable widgets provide at-a-glance insights into the store's performance.",
      tags: ["#react", "#mongodb", "#css"],
      image: "./fuel1.png",
    },
    {
      title: "Chat App",
      description:
        "Our chat application harnesses the capabilities of the MERN to create a seamless communication platform. Users can register, login, create groups, and exchange messages, fostering real-time interactions and collaboration.",
      tags: ["#react", "#restapi", "#express"],
      image: "./chat app.png",
    },
    {
      title: "Cryptocurrency Tracker",
      description:
        "Our cryptocurrency tracker application utilizes the MERN stack—MongoDB, Express.js, React.js, and Node.js—to provide real-time information and analysis on various cryptocurrencies. Users can monitor cryptocurrency prices, view historical data, set alerts, and stay updated with market trends.",
      tags: ["#react", "#restapi", "#express"],
      image: "./stock.png",
    },
  ];

  return (
    <motion.section
      className="projects"
      id="projects"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <span className="projects-label">MY WORK</span>
      <h2 className="projects-title">Projects.</h2>
      <p className="projects-subtitle">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3 className="project-name">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>
            <div className="project-tags">
              {proj.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
