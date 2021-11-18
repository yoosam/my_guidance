import { useState, useEffect } from "react";
import { surveyList as sL } from "../../data";
import axios from "axios";
import Modal from "./Modal";
import "./style.css";

function Testlist({ selectedMenu }) {
  const [selectedTest, setSelectedTest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [surveyList, setSurveyList] = useState(null);

  const fetchData = async () => {
    setError(null);
    setLoading(true);
    try {
      // const response = await axios.get("/api/survey");
      // setSurveyList(response.data);
      setSurveyList(sL);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading === true) {
    return <> 로딩중 </>;
  }
  if (error !== null) {
    return <> {error} </>;
  }
  if (surveyList === null) {
    return <> 데이터가 없습니다. </>;
  }

  const SurveyList = surveyList
    .filter((el) => {
      if (selectedMenu === "전체") {
        return true;
      }

      return el.type === selectedMenu;
    })
    .map((el) => {
      const testStart = () => {
        setSelectedTest(el.testList);
      };
      return (
        <div className="Table-row">
          <div className="T-cell">{el.type}</div>
          <div className="T-cell">{el.testname}</div>
          <div className="T-cell">{el.questionCnt}</div>
          <div className="T-cell">{el.target}</div>
          <div onClick={testStart} className="T-cell">
            검사시작
          </div>
        </div>
      );
    });

  return (
    <div className="Testlist">
      <div className="Table-row">
        <div className="T-cell">검사종류</div>
        <div className="T-cell">검사명</div>
        <div className="T-cell">문항수</div>
        <div className="T-cell">검사대상</div>
        <div className="T-cell">검사시작</div>
      </div>
      {SurveyList}
      {selectedTest && (
        <Modal testList={selectedTest} setSelectedTest={setSelectedTest} />
      )}
    </div>
  );
}

export default Testlist;
