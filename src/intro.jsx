import './intro.css';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Intro() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 } // triggers when 20% of section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
  };

  return (
    <motion.section
      ref={ref}
      id='intro'
      className="intro"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="intro-header">
        <p className="intro-subtitle">INTRODUCTION</p>
        <h2 className="intro-title">Overview.</h2>
        <p className="intro-description">
          I'm a skilled software developer with experience in Java and JavaScript, 
          and expertise in framework like React 
          I'm a quick learner and collaborate closely with clients to create efficient, 
          scalable, and user-friendly solutions that solve real-world problems. 
          Let’s work together to bring your ideas to life!
        </p>
      </div>

      <div className="intro-cards">
        {/* Card 1 */}
        <div className="intro-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
            alt="Web  Developer"
            className="intro-icon"
          />
          <h3>Web  Developer</h3>
        </div>

        {/* Card 2 */}
        <div className="intro-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
            alt="React  Developer"
            className="intro-icon"
          />
          <h3>React  Developer</h3>
        </div>

        {/* Card 3 */}
        <div className="intro-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
            alt="Backend Developer"
            className="intro-icon"
          />
          <h3>Backend Developer</h3>
        </div>
      </div>
    </motion.section>
  );
}

export default Intro;
