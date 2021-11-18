import "./style.css";
function Middlebar({ setSelectedMenu }) {
  const menuList = [
    "전체",
    "성격",
    "정신건강",
    "진로직업학습",
    "연애결혼육아",
    "대인관계",
  ];
  const MenuList = menuList.map((menu) => {
    const clickMenu = () => {
      setSelectedMenu(menu);
    };
    return (
      <div className="column" onClick={clickMenu}>
        {menu}
      </div>
    );
  });
  return (
    <div className="Middlebar">
      <div className="table">{MenuList}</div>
    </div>
  );
}

export default Middlebar;
