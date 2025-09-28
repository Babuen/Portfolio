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
      title: "The Online Fuel Delivery",
      description:
        "The Online Fuel Delivery web app provides a seamless platform for users to order fuel anytime, anywhere. It ensures quick, safe, and convenient doorstep delivery with just a few clicks.",
      tags: ["#react", "#mongodb", "#css"],
      image: "./fuel1.png",
    },
    {
      title: "Chat App",
      description:
        "The Chat App built with React enables real-time messaging with a clean and responsive interface. It offers a smooth user experience for seamless communication across devices.",
      tags: ["#react", "#firebase", "#javascript"],
      image: "./chat app.png",
    },
    {
      title: "Stock trading platform using encrypted Vms",
      description:
        "The Stock Trading Platform using encrypted VMs ensures secure and reliable trading by isolating transactions in protected environments. It provides users with fast, encrypted, and risk-free access to stock markets.",
      tags: ["#react", "#restapi", "#Cloud"],
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
