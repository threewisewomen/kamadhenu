// src\components\About.jsx
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import Tilt from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[14px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Motion Div */}
      <motion.div variants={textVariant()}>
        {/* Wrap each element separately */}
        <p className={styles.sectionSubText}>Breakthroughs</p>
        <h2 className={styles.sectionHeadText}>The Blueprint of a New Era.</h2>
      </motion.div>

      {/* Motion Paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        From energy independence to life-saving innovations, our technology
        empowers you to redefine possibilities—on your terms. This isn’t just a
        revolution; it’s a blueprint for a future you design.
      </motion.p>

      {/* Additional Content */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
