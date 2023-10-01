import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import "./Modal.css";
import Modal from "./Modal"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 1,
          scale: 1,
          speed: 1,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <label
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
              aria-label={`Tag: ${tag.name}`} // Use aria-label for accessibility
              htmlFor={`tag-${tag.name}`} // Corresponding input id
            >
              #{tag.name}
            </label>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Нашата пабота</p>
        <h2 className={`${styles.sectionHeadText} `}>Проекти</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-[#000000] text-[19px] max-w-3xl leading-[30px]'
        >
          Представяме ви няколко примера за нашата работа. Всеки проект е описан
          накратко и съдържа връзки, за да можете да получите пълна представа за
          това, което правим. Тези проекти отразяват нашите способности като
          креативност, ефективност, опит и много други.
        </motion.p>
      </div>

        <Modal/>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            openModal={() => openModal(index)}
            {...project}
          />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, 'projects');
