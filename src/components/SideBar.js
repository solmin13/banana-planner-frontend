import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/SideBar.css";

function SideBar() {
  const [isOpen, setIsOpen] = useState("false");
  const [userName, setUserName] = useState("이름");
  const [greeting, setGreeting] = useState("인사말");

  return (
    <>
      <div>
        {isOpen == "false" ? (
          <button
            onClick={() => {
              setIsOpen("true");
            }}
            id="sideBarBtn"
          >
            <img
              src={`${process.env.PUBLIC_URL}/public_assets/siderBarBtn.png`}
            />
          </button>
        ) : null}
      </div>

      <div id="sideBar">
        {isOpen == "true" ? (
          <div>
            <div>
              <button
                onClick={() => {
                  setIsOpen("false");
                }}
              >
                <img src={`${process.env.PUBLIC_URL}/public_assets/x.png`} />
              </button>
              <img></img>
              <h1>{userName}</h1>
              <p>{greeting}</p>
              <button><img src={`${process.env.PUBLIC_URL}/public_assets/edit.png`} />프로필 수정</button>
            </div>
            <div>
              <NavLink>
                <img src={`${process.env.PUBLIC_URL}/public_assets/todoList.png`} />
                투두 리스트
              </NavLink>
              <br />
              <NavLink>
                <img src={`${process.env.PUBLIC_URL}/public_assets/user.png`} />
                계정 관리
              </NavLink>{" "}
              <br />
              <NavLink>
                <img src={`${process.env.PUBLIC_URL}/public_assets/friend.png`} />
                친구 관리
              </NavLink>{" "}
              <br />
              <NavLink>
                <img src={`${process.env.PUBLIC_URL}/public_assets/category.png`} />
                카테고리 설정
              </NavLink>{" "}
              <br />
              <NavLink>
                <img src={`${process.env.PUBLIC_URL}/public_assets/team.png`} />팀 관리
              </NavLink>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default SideBar;
