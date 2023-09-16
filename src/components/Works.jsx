import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./Modal.css";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  openModal,
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
          <div
            className='transparent w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-130'
            onClick={openModal}
          >
            Open
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Modal = ({
  index,
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  isOpen,
  closeModal,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='modal'>
        <div onClick={closeModal} className='overlay'></div>
        <div className='modal-content bg-tertiary'>
          <h2>Тя анализира наличното пространство и създава ефективни планове на етажите, е</h2>

          <label className='flex flex-col'>
            <label className='flex flex-row'>
              <img src={image_1} alt='test' className='w-1/2 h-1/2 object-cover' />
              <img src={image_2} alt='test' className='w-1/2 h-1/2 object-cover' />
            </label>

            <label className='flex flex-row'>
              <img src={image_3} alt='test' className='w-1/2 h-1/2 object-cover' />
              <img src={image_4} alt='test' className='w-1/2 h-1/2 object-cover' />
            </label>

            <label className='flex flex-row'>
              <img src={image_5} alt='test' className='w-1/2 h-1/2 object-cover' />
              <img src={image_6} alt='test' className='w-1/2 h-1/2 object-cover' />
            </label>
          </label>

          <button className='close-modal' onClick={closeModal}>
            CLOSE
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

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

      {modalIndex !== null && (
        <Modal
          index={modalIndex}
          isOpen={modalIndex !== null}
          closeModal={closeModal}
          {...projects[modalIndex]}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, 'projects');
