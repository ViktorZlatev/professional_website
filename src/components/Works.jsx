import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Modal from "./Modal"; // Import the Modal component
import "./Modal.css";
import RadoModal from "./RadoModal";
import ViktorModal from "./ViktorNachinModal";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  openModal,
  changeViktorModal
}) => {
  const handleOpenModalClick = () => {
    // Call the openModal function with the desired content or images
    openModal();
  };

  const handleChangeViktorModalClick = () => {
    // Call the changeViktorModal function with the desired content
    changeViktorModal("img"+index);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 1,
          scale: 1,
          speed: 1,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* ... other card content ... */}
        <img src={image} />
        <h2>{ name}</h2>
        <p>{ description}</p>
        <button onClick={handleChangeViktorModalClick} >Change Viktor Modal Content</button>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [showViktorModal,SetShowViktorModal] = React.useState(false)
  const [ViktorModalInfo, setViktorModalInfo] = React.useState(null)
  const ToggleOnViktorModal = () => {
    SetShowViktorModal(true)
  }
  const changeViktorModal = (context) => {
    setViktorModalInfo(context)
    ToggleOnViktorModal()
  }

  const ToggleOffViktorModal = () => {
    SetShowViktorModal(false)
  }


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Нашата пабота</p>
        <h2 className={`${styles.sectionHeadText} `}>Проекти</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#000000] text-[19px] max-w-3xl leading-[30px]"
        >
          Представяме ви няколко примера за нашата работа. Всеки проект е
          описан накратко и съдържа връзки, за да можете да получите пълна
          представа за това, което правим. Тези проекти отразяват нашите
          способности като креативност, ефективност, опит и много други.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <div key={`project-${index}`} style={{ flexBasis: "23%", padding: "-10px" }}>
            <ProjectCard
              index={index}
              openModal={() => openModal(project.images)}
              changeViktorModal={changeViktorModal}
              {...project}
            />
          </div>
        ))}
      </div>
      <ViktorModal text={ViktorModalInfo} IsVisible={showViktorModal} CloseModal={ToggleOffViktorModal} />
    </>
  );
};

export default SectionWrapper(Works, "projects");
