import React from "react";
import "./styles.css";

// 모달 컴포넌트 타입
interface ModalProps {
  imageUrl: string;
  num: number;
  onClose: () => void;
}

// 모달 메시지 리스트
const modalMessageList: string[] = [
  "행복의 계절, 모두가 함께하는 24일!",
  "이 12월, 행복한 순간이 우리를 감싸네요.",
  "다 같이 즐겁게 보내는 24일, 행복이 가득합니다!",
  "12월의 특별함을 모두와 함께 나누어요.",
  "각자의 작은 행복이 모여 만드는 특별한 24일!",
  "행복이라는 이름의 캘린더, 모두에게 열려 있어요.",
  "함께 하는 즐거움, 24일 동안 계속되길 바랍니다.",
  "12월은 행복한 순간들이 가득한 달이에요.",
  "우리 모두에게 찾아온 특별한 행복의 계절!",
  "매일 매일이 행복으로 가득찬 24일이 되길.",
  "12월, 행복이 가득한 당신과 나누는 소중한 시간.",
  "다 함께하는 24일, 행복이 여러 가지 모습으로 찾아올 거예요.",
  "행복의 파도가 모두에게 찾아오는 특별한 24일!",
  "12월, 각자의 작은 행복이 모여 큰 기쁨이 되길.",
  "모두에게 행복이 넘치는 24일을 기대해봐요.",
  "12월의 특별한 순간, 행복이 퍼져나가길.",
  "모두에게 행복한 24일이 될 것을 기대합니다!",
  "12월, 행복이 가득찬 마음으로 채워져 있는 시간.",
  "다양한 행복이 모여 하나로 뭉쳐지는 24일!",
  "12월, 당신과 나누는 특별한 행복의 순간들.",
  "모두에게 다가오는 24일, 행복이 함께하기를!",
  "12월의 행복한 기운이 모두를 감싸네요.",
  "다 함께하는 24일, 행복한 느낌이 가득할 거예요.",
  "12월, 모두에게 기쁨과 행복이 넘치는 달이에요.",
];

// 모달 컴포넌트
const Modal: React.FC<ModalProps> = ({ imageUrl, num, onClose }) => (
  <div className="modal" onClick={onClose}>
    <div className="modal-content zoomIn">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "100%",
          height: "211px",
        }}
      />
      <p>{modalMessageList[num]}</p>
    </div>
  </div>
);

export default Modal;
