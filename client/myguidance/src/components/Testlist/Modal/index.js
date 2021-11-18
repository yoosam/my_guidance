import { useRef, useState } from "react";
import axios from "axios";
import "./style.css";
function Modal({ testList, setSelectedTest }) {
  const questionRef = useRef([]);
  const [score, setScore] = useState(0);
  const [surveyResult, setSurveyResult] = useState("설문결과 입니다");

  const fetchData = async (score) => {
    try {
      const response = await axios.post("/api/survey_result/", {
        score,
        surveyId: 1,
      });
      setSurveyResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const QuestionTable = testList.map((el, idx) => {
    return (
      <div className="questionTable">
        <div>{el.question} </div>
        <select ref={(el) => (questionRef.current[idx] = el)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="20">20</option>
        </select>
      </div>
    );
  });
  const submit = () => {
    const scoreSum = questionRef.current.reduce((acc, el) => {
      return acc + +el.value;
    }, 0);
    setScore(scoreSum);
    fetchData(scoreSum);
  };
  const closeModal = () => {
    setSelectedTest(null);
  };
  return (
    <div className="Modal">
      {QuestionTable}
      <button onClick={submit}>제출하기</button>
      <button onClick={closeModal}>닫기</button>
      <div>{score}</div>
      <div>
        <div> 설문결과 </div>
        <div> {surveyResult} </div>
      </div>
    </div>
  );
}

export default Modal;
