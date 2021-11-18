import "./style.css";
import Logoimg from "../../images/zooz.png";
function Menubar() {
  return (
    <div className="Menubar">
      <a href="http://www.guidance.co.kr/Intgr/mainIndex/index.asp">
        <img src={Logoimg} alt="profile"></img>
      </a>

      <div className="category">
        <div>가이던스프로</div>
        <div>가이던스에듀</div>
        <div>마이스쿨존</div>
        <div>개인온라인심리검사</div>
      </div>
    </div>
  );
}

export default Menubar;
