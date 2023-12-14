// Calendar.tsx
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "../Modal";
import Countdown from "./Countdown";

const Calendar: React.FC = () => {
  const [showModal, setShowModal] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  const handleCardClick = (index: number) => {
    const openDate = new Date(2023, 11, index + 1); // 2023년 12월 1일부터 시작
    if (currentTime && currentTime.getTime() > openDate.getTime()) {
      setShowModal(index + 1);
    } else {
      // 현재 날짜가 열 수 있는 날짜보다 이전인 경우 몇 일 후에 열 수 있다는 메시지를 표시
      const daysRemaining = Math.ceil(
        (openDate.getTime() - (currentTime?.getTime() || 0)) /
          (1000 * 60 * 60 * 24)
      );
      alert(`이 카드는 ${daysRemaining}일 후에 열 수 있어요!`);
    }
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  useEffect(() => {
    setCurrentTime(
      new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }))
    );
  }, []);

  return (
    <>
      <section className="grid-1">
        <div className="title flex-col item-baseline">
          <img src="merry.png" alt="merry" />
          <Countdown />
        </div>
        {[...Array(24)].map((_, i) => (
          <Card key={i} num={i + 1} onClick={() => handleCardClick(i)} />
        ))}
      </section>
      {showModal !== null && (
        <Modal
          imageUrl={`card/card-${showModal}.png`}
          num={showModal}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Calendar;
