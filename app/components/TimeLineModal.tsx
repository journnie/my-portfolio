import React from "react";

interface TimeLineModalProps {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimeLineModal = ({ setIsModalOpened }: TimeLineModalProps) => {
  const handleModalClick = () => {
    setIsModalOpened(false);
  };

  return (
    <div className="bg-gray-950 bg-opacity-75 absolute w-full min-h-screen z-30 flex flex-col justify-center items-center">
      <div
        onClick={handleModalClick}
        className=" w-[600px] h-[300px] bg-blue-400 rounded-xl shadow-md"
      >
        <span className="text-xl">modal on!</span>
      </div>
    </div>
  );
};

export default TimeLineModal;
