"use client";

import React, { useEffect, useState } from "react";
import portfolioData from "@/app/mocks/portfolioData.json";
import TimeLineCard from "../components/TimeLineCard";
import TimeLineModal from "../components/TimeLineModal";

const TimeLineSection = () => {
  const { timelines } = portfolioData;
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  useEffect(() => {
    console.log("isModalOpened: ", isModalOpened);
  }, [isModalOpened]);
  //[] 비어있으면 시작했을 때 뭐시기 어쩌구 해라? 처음에 컴포넌트가 랜더링 될 대 이 함수를 실행해라. 그리고.. ... 따로 분기 처리 할 필요 없다.

  return (
    <>
      <section>
        <h5>My Timeline</h5>
        {timelines && (
          <div className="flex flex-col justify-start items-start gap-y-8">
            {timelines.map((timeline, index) => (
              <TimeLineCard
                key={index}
                title={timeline.title}
                date={timeline.date}
                description={timeline.description}
                isModalOpened={isModalOpened}
                setIsModalOpended={setIsModalOpened}
              />
            ))}
          </div>
        )}
      </section>
      {/* // isModalOpened == true 일때만 모달 창 띄움 */}
      {isModalOpened && <TimeLineModal setIsModalOpened={setIsModalOpened} />}
    </>
  );
};

export default TimeLineSection;
