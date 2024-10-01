import React from "react";

interface TimeLineCardProps {
  title: string;
  date: string;
  description: string;
  isModalOpened: boolean;
  setIsModalOpended: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimeLineCard = ({
  title,
  date,
  description,
  isModalOpened,
  setIsModalOpended,
}: TimeLineCardProps) => {
  const handleClick = () => {
    setIsModalOpended(true); // modal 창은 딱히 또 누를일이 없어서? 걍 트루 주는 게 맞음
  };

  return (
    <div onClick={handleClick} className="flex flex-col justify-start items-start gap-y-0.5 hover:border hover:border-red-600">
      <span>{title}</span>
      <span>{date}</span>
      <span>{description}</span>
    </div>
  );
};

export default TimeLineCard;
