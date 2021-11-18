import "./style.css";
function Headerbar() {
  return (
    <div className="Headerbar">
      <div className="Section">
        <div className="link">회사소개</div>
        <div className="link">사이트맵</div>
        <div className="link">FAQ</div>
      </div>
      <div className="Section">
        <div className="link">Q 마인드에 오신걸 환영합니다.고객님</div>
        <div className="link">로그인</div>
        <div className="link">회원가입</div>
      </div>
    </div>
  );
}

export default Headerbar;
