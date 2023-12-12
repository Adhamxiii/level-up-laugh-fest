import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const PanelCard = ({
  className,
  imgSrc,
  title,
  subtitle,
  date,
  time,
  modalContent,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={className}>
      <img src={imgSrc} alt="panel" />
      <div className="panel-content">
        <h2 className="panel-title">{title}</h2>
        <h3 className="panel-subtitle">{subtitle}</h3>
        <p className="panel-date">{date}</p>
        <p className="panel-time">{time}</p>
        <Button openModal={openModal}>Learn More</Button>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={modalContent}
          ></Modal>
        )}
      </div>
    </div>
  );
};

export default PanelCard;
